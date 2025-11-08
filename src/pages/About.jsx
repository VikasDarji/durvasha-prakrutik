import React from "react";
import "./About.css";
import aboutImg from "../assets/logo2.png"; // You can replace this with your own image

const About = () => {
  return (
    <div className="about-container text-white pt-24">
      {/* 🟦 Hero Section */}
      <section className="about-hero text-center py-16 bg-gradient-to-b from-[#5a7c8a] via-[#203a43] to-[#2c5364]">
        <h1 className="text-5xl font-bold animate-fadeInDown">
          About <span className="text-cyan-400">Our Business</span>
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto opacity-80 animate-fadeInUp">
          We bring innovative ideas to life through modern technology, creative
          design, and strategic thinking — helping your business grow faster and
          smarter.
        </p>
      </section>

      {/* 🟩 Our Mission Section */}
      <section className="mission-section flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 bg-[#121212]">
        <img
          src={aboutImg}
          alt="Our Mission"
          className="w-60 h-60 rounded-full object-contain shadow-[0_0_20px_#00ffff] animate-float"
        />
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 animate-slideRight">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed animate-fadeIn">
            Our mission is to empower entrepreneurs and startups by providing
            cutting-edge digital solutions that transform ideas into impactful
            realities. We focus on innovation, simplicity, and long-term growth.
          </p>
        </div>
      </section>

      {/* 🟨 Our Vision Section */}
      <section className="vision-section flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-16 px-6 bg-gradient-to-r from-[#0f2027] to-[#2c5364]">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 animate-slideLeft">
            Our Vision
          </h2>
          <p className="text-gray-200 leading-relaxed animate-fadeIn">
            We envision a world where every business — big or small — has equal
            access to technology that helps them succeed. We aim to create
            digital experiences that are inspiring, human-centered, and
            meaningful.
          </p>
        </div>
        <img
          src={aboutImg}
          alt="Our Vision"
          className="w-60 h-60 rounded-full object-contain shadow-[0_0_20px_#00ffff] animate-float"
        />
      </section>

      {/* 🟧 Why Choose Us Section */}
      <section className="why-choose-us py-16 bg-[#0b0b0b] text-center px-6">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 animate-fadeInDown">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "💡 Innovative Ideas",
              desc: "We think beyond boundaries to design creative solutions that make your business stand out.",
            },
            {
              title: "⚙️ Professional Execution",
              desc: "Our skilled team ensures your ideas are implemented efficiently with perfection and passion.",
            },
            {
              title: "🚀 Growth Driven",
              desc: "We don’t just build products — we help your business grow through strategy and innovation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f2027] shadow-lg border border-cyan-500/20 hover:scale-105 hover:shadow-[0_0_25px_#00ffff] transition-all duration-500 animate-fadeIn"
            >
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
