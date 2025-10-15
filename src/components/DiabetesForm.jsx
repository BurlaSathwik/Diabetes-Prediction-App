import { useState } from "react";
import { predictDiabetes } from "../api/api";

const DiabetesForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    blood_pressure: "",
    skin_thickness: "",
    insulin: "",
    bmi: "",
    diabetes_pedigree: "",
    age: "",
  });

  // Update input as string
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert strings to floats/ints before sending
    const dataToSend = {
      pregnancies: parseFloat(formData.pregnancies),
      glucose: parseFloat(formData.glucose),
      blood_pressure: parseFloat(formData.blood_pressure),
      skin_thickness: parseFloat(formData.skin_thickness),
      insulin: parseFloat(formData.insulin),
      bmi: parseFloat(formData.bmi),
      diabetes_pedigree: parseFloat(formData.diabetes_pedigree),
      age: parseInt(formData.age), // age can be int
    };

    // Optional: simple validation
    if (Object.values(dataToSend).some((val) => isNaN(val) || val < 0)) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const res = await predictDiabetes(dataToSend);
    setResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type="text"
            name={key}
            onChange={handleChange}
            value={formData[key]}
          />
        </div>
      ))}
      <button type="submit">Predict</button>
    </form>
  );
};

export default DiabetesForm;
