import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max, className = '' }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
