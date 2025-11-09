import React from "react";
import { motion } from "framer-motion";

// Enhanced Services.jsx — Animated Emoji Version for Durvasha Prakrutik
// With theme-colored text, gradient glows, and hover animations

const services = [
  {
    id: 1,
    title: "Organic Farming Solutions",
    desc: "Sustainable, chemical-free farming practices to boost soil health and crop yield.",
    icon: "🌿",
  },
  {
    id: 2,
    title: "Efficient Irrigation",
    desc: "Design & install water-saving irrigation systems for every farm size.",
    icon: "💧",
  },
  {
    id: 3,
    title: "Crop Consultancy",
    desc: "Data-driven crop planning, pest management and expert agronomy support.",
    icon: "☀️",
  },
  {
    id: 4,
    title: "Soil & Compost Management",
    desc: "Natural fertilizers, compost programs and soil testing guidance.",
    icon: "🌾",
  },
  {
    id: 5,
    title: "Seed & Inputs Supply",
    desc: "High-quality, certified seeds and eco-friendly inputs for healthy crops.",
    icon: "🌱",
  },
  {
    id: 6,
    title: "Market & Yield Growth",
    desc: "Help to increase market access and improve profitability for farmers.",
    icon: "📈",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0d1b1e] via-[#102520] to-[#071810] text-gray-100 relative overflow-hidden"
      aria-label="Our services"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/10 via-green-500/5 to-transparent animate-pulse blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Practical, sustainable agricultural services built for small and large farms — blending
            modern methods with traditional care.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0], transition: { duration: 0.5 } }}
              className="group relative rounded-3xl p-8 border border-emerald-700/30 bg-gradient-to-br from-[#11261a]/60 via-[#0f261d]/70 to-[#0a1c12]/50 backdrop-blur-md shadow-lg hover:shadow-emerald-800/40 transition-all duration-500 ease-out overflow-hidden"
              aria-labelledby={`service-${s.id}-title`}
            >
              {/* Decorative floating light */}
              <motion.div
                className="absolute -right-10 -top-10 opacity-20 w-40 h-40 bg-gradient-to-br from-green-400/40 to-lime-500/30 rounded-full blur-3xl"
                animate={{ y: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 1 } }}
                className="text-5xl mb-4 text-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
              >
                {s.icon}
              </motion.div>

              <h3
                id={`service-${s.id}-title`}
                className="text-2xl font-bold bg-gradient-to-r from-emerald-300 via-lime-300 to-green-400 bg-clip-text text-transparent"
              >
                {s.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">{s.desc}</p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300"
                aria-label={`Learn more about ${s.title}`}
              >
                Learn more
              </motion.button>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <motion.p
            className="text-base text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Need a custom plan? <a href="#contact" className="underline text-emerald-300 hover:text-emerald-400">Contact us</a>.
          </motion.p>
        </div>
      </div>
    </section>
  );
  
}
