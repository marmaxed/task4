import React, { useState, useEffect } from "react";
import type { StepData } from "./Steps";

interface StepFormProps {
  onAdd: (step: StepData) => void;
  editStep: StepData | null;
}

export default function StepForm({ onAdd, editStep }: StepFormProps) {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");

  useEffect(() => {
    if (editStep) {
      setDate(editStep.date);
      setDistance(editStep.distance.toString());
    }
  }, [editStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !distance || isNaN(Number(distance))) return;
    onAdd({ date, distance: parseFloat(distance) });
    setDate("");
    setDistance("");
  };

  return (
    <form className="step-form" onSubmit={handleSubmit}>
      <label>
        Дата (ДД.ММ.ГГГГ)
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Пройдено км
        <input type="number" step="0.1" value={distance} onChange={e => setDistance(e.target.value)} />
      </label>
      <button type="submit">OK</button>
    </form>
  );
}