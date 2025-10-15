const Result = ({ result }) => {
  if (!result) return null;

  const isDiabetic = parseInt(result.prediction) === 1;

  return (
    <div className={`result-box ${isDiabetic ? "positive" : "negative"}`}>
      Prediction: {isDiabetic ? "Diabetic" : "Non-Diabetic"}
    </div>
  );
};

export default Result;
