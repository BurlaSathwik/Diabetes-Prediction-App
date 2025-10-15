import numpy as np
import joblib
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load trained model and scaler
model = joblib.load("diabetes_model.pkl")
scaler = joblib.load("scaler.pkl")

# Median values (same as used in training)
MEDIAN_INSULIN = 125.0   # Use exact median from training
MEDIAN_SKIN = 29.0       # Use exact median from training

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PatientData(BaseModel):
    pregnancies: int
    glucose: float
    blood_pressure: float
    skin_thickness: float
    insulin: float
    bmi: float
    diabetes_pedigree: float
    age: int

@app.post("/predict")
def predict(data: PatientData):
    try:
        input_array = np.array([[
            data.pregnancies,
            data.glucose,
            data.blood_pressure,
            data.skin_thickness,
            data.insulin,
            data.bmi,
            data.diabetes_pedigree,
            data.age
        ]], dtype=float)

        # Replace zeros with median
        if input_array[0, 4] == 0:
            input_array[0, 4] = MEDIAN_INSULIN
        if input_array[0, 3] == 0:
            input_array[0, 3] = MEDIAN_SKIN

        # Scale input
        input_scaled = scaler.transform(input_array)

        # Predict
        prediction = model.predict(input_scaled)[0]
        return {"prediction": int(prediction)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
