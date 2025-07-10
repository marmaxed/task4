import type { StepData } from "./Steps";

interface StepListProps {
  steps: StepData[];
  onDelete: (date: string) => void;
  onEdit: (date: string) => void;
}

export default function StepList({ steps, onDelete, onEdit }: StepListProps) {
  return (
    <table className="step-table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {steps.map(step => (
          <tr key={step.date}>
            <td>{new Date(step.date).toLocaleDateString()}</td>
            <td>{step.distance}</td>
            <td>
              <button onClick={() => onEdit(step.date)}>✎</button>
              <button onClick={() => onDelete(step.date)}>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}