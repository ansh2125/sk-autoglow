import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // ✅ useEffect add
import { User, Phone, MapPin, Car, Home, Hash, CheckCircle } from "lucide-react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        flat: "",
        vehicleType: "",
        vehicleNumber: "",
        plan: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ✅ 🔥 AUTO SELECT PLAN FROM URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selectedPlan = params.get("plan");

        if (selectedPlan) {
            setFormData((prev) => ({
                ...prev,
                plan: selectedPlan,
            }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required";
            }
        });

        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be exactly 10 digits";
        }

        if (formData.vehicleNumber && formData.vehicleNumber.length < 8) {
            newErrors.vehicleNumber = "Enter valid vehicle number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            await fetch("https://script.google.com/macros/s/AKfycbyYH8pnKHGsgf4w9gFus3Imm3Udx7xFUXrrS-uL6aUziu64iYn-jsZLiQRZOV2wuvdV/exec", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    secret: "SK_AUTO_GLOW_2026",
                    name: formData.name,
                    mobile: formData.phone,
                    society: formData.location,
                    flat: formData.flat,
                    vehicleType: formData.vehicleType,
                    vehicleNumber: formData.vehicleNumber,
                    plan: formData.plan,
                }),
            });

            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: "",
                    phone: "",
                    location: "",
                    flat: "",
                    vehicleType: "",
                    vehicleNumber: "",
                    plan: "",
                });
            }, 4000);

        } catch (err) {
            alert("Something went wrong");
        }
    };

    return (
        <section
            id="booking"
            className="py-28 scroll-mt-28 bg-black flex justify-center"
        >
            <div className="w-full max-w-5xl px-6">

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,215,0,0.1)]">

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                Booking Confirmed 🎉
                            </h3>

                            <p className="text-white/60">
                                Our team will contact you shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

                            {[
                                { name: "name", icon: User, placeholder: "Full Name" },
                                { name: "phone", icon: Phone, placeholder: "Mobile Number" },
                                { name: "location", icon: MapPin, placeholder: "Society / Location" },
                                { name: "flat", icon: Home, placeholder: "Tower / Flat No" },
                                { name: "vehicleNumber", icon: Hash, placeholder: "Vehicle Number" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <div className="relative">
                                        <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                                        <input
                                            type="text"
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            className="w-full pl-12 pr-4 py-4 bg-black border border-white/20 rounded-xl text-white focus:border-yellow-400 outline-none"
                                        />
                                    </div>
                                    {errors[field.name] && (
                                        <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
                                    )}
                                </div>
                            ))}

                            <div>
                                <select
                                    name="vehicleType"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                    className="w-full py-4 bg-black text-white border border-white/20 rounded-xl"
                                >
                                    <option value="">Vehicle Type</option>
                                    <option>Hatchback</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Bike</option>
                                </select>
                            </div>

                            {/* ✅ PLAN AUTO + MANUAL BOTH */}
                            <div>
                                <select
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleChange}
                                    className="w-full py-4 bg-black text-white border border-white/20 rounded-xl"
                                >
                                    <option value="">Choose Plan</option>
                                    <option>Basic</option>
                                    <option>Standard</option>
                                    <option>Premium</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg"
                                >
                                    Book Free Demo
                                </motion.button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingForm;