import { useState } from "react";
import StepForm from "./StepForm";
import StepList from "./StepList";

export interface StepData {
  date: string;
  distance: number;
}

export default function Steps() {
  const [steps, setSteps] = useState<StepData[]>([]);
  const [editStep, setEditStep] = useState<StepData | null>(null);

  const handleAdd = (newStep: StepData) => {
    setSteps(prev => {
      const existing = prev.find(s => s.date === newStep.date);
      let updated;
      if (existing) {
        updated = prev.map(s =>
          s.date === newStep.date ? { ...s, distance: s.distance + newStep.distance } : s
        );
      } else {
        updated = [...prev, newStep];
      }
      return [...updated].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
    setEditStep(null);
  };

  const handleDelete = (date: string) => {
    setSteps(prev => prev.filter(s => s.date !== date));
  };

  const handleEdit = (date: string) => {
    const found = steps.find(s => s.date === date);
    if (found) setEditStep(found);
  };

  return (
    <div className="steps-wrapper">
      <StepForm onAdd={handleAdd} editStep={editStep} />
      <StepList steps={steps} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}