import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🩺 Diabetes Predictor</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/predict" style={styles.button}>Predict Diabetes</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0078d7",
    padding: "0.8rem 1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  logo: {
    color: "white",
    fontSize: "1.3rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: "1rem",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "white",
    color: "#0078d7",
    textDecoration: "none",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    fontWeight: "600",
  },
};

export default Navbar;
