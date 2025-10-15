import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import diabetesImg from "../assets/diabetes.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="hero-content">
          <h1>Predict Your Diabetes Risk Instantly</h1>
          <p>
            AI-powered predictions to help you understand your health and make informed decisions.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/predict")} className="cta-button">
              Start Prediction
            </button>
            <button onClick={() => navigate("/contact")} className="secondary-button">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>🧬</span>
            <h3>Enter Health Data</h3>
            <p>Provide details like glucose, BMI, insulin levels, and age.</p>
          </div>
          <div className="step">
            <span>⚙️</span>
            <h3>ML Model Analysis</h3>
            <p>Our algorithm processes your data for accurate predictions.</p>
          </div>
          <div className="step">
            <span>📊</span>
            <h3>Get Results Instantly</h3>
            <p>Receive predictions and take proactive steps for better health.</p>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="why-choose-us">
        <h2>Why Choose Our System?</h2>
        <div className="cards">
          <div className="card">
            <h3>Accurate Predictions</h3>
            <p>AI models trained on reliable health datasets ensure high accuracy.</p>
          </div>
          <div className="card">
            <h3>Easy to Use</h3>
            <p>User-friendly interface for quick input and instant results.</p>
          </div>
          <div className="card">
            <h3>Data Privacy</h3>
            <p>Your health data is safe with us. We don’t store personal information.</p>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about-section">
        <div className="about-content">
          <img src={diabetesImg} alt="Diabetes Awareness" />
          <div>
            <h2>Understanding Diabetes</h2>
            <p>
              Diabetes is a condition where blood glucose levels rise higher than normal.
              Early prediction helps you adopt lifestyle changes to reduce risks.
            </p>
            <ul>
              <li>Detect risk early</li>
              <li>Make informed lifestyle decisions</li>
              <li>Empower better health management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="cta-section">
        <h2>Take Control of Your Health Today</h2>
        <p>Use our free prediction tool and make smarter health decisions.</p>
        <button onClick={() => navigate("/predict")} className="cta-button">
          Start Prediction
        </button>
      </section>
    </div>
  );
};

export default HomePage;
