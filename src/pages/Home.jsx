import React from "react";
import logo from "../assets/logo2.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* 🌾 Hero Section */}
      <section className="hero-section">
        <img src={logo} alt="Agri field" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Welcome to AgriWorld</h1>
          <p>Empowering Farmers, Sustaining the Future</p>
         <a href="/Contact">
          <button className="hero-btn">Explore More</button>
          </a>
        </div>
      </section>

      {/* 🌱 About Agriculture */}
      <section className="about-agriculture fade-in">
        <h2>About Agriculture</h2>
        <p>
          Agriculture is the foundation of human civilization, providing food,
          raw materials, and employment. Modern agriculture combines technology
          and sustainability to increase productivity while preserving nature.
        </p>
        <p>
          With innovations like smart irrigation, drone technology, and organic
          practices, today’s farmers are shaping a greener and more secure
          future for everyone.
        </p>
      </section>

      {/* 🚜 Farming Cards */}
      <section className="farming-section fade-in">
        <h2>Types of Farming</h2>
        <div className="card-container">
          <div className="farm-card">
            <h3>Organic Farming</h3>
            <p>
              Focuses on natural fertilizers and eco-friendly techniques to
              maintain soil health and biodiversity.
            </p>
          </div>

          <div className="farm-card">
            <h3>Mixed Farming</h3>
            <p>
              Combines crop cultivation and livestock rearing, ensuring balance
              between food and animal production.
            </p>
          </div>

          <div className="farm-card">
            <h3>Modern Farming</h3>
            <p>
              Uses advanced technologies such as AI, drones, and precision
              irrigation to improve yield and efficiency.
            </p>
          </div>

          <div className="farm-card">
            <h3>Subsistence Farming</h3>
            <p>
              Traditional method where farmers grow food mainly for their own
              family’s consumption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
