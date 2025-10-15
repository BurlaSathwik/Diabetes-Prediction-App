import { useState } from "react";
import DiabetesForm from "../components/DiabetesForm";
import Result from "../components/Result";

const PredictPage = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="predict-container">
      <h1>Diabetes Prediction System</h1>
      <DiabetesForm setResult={setResult} />
      <Result result={result} />
    </div>
  );
};

export default PredictPage;
