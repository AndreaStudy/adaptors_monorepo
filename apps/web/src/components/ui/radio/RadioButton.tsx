import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioButtonProps {
  options: Option[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  const selectedColor = '#F8D448';
  const defaultColor = '#e5e7eb';

  return (
    <div className=" flex gap-5">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center justify-center p-2  rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => onChange(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden text-sm"
          />
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{
                backgroundColor:
                  selectedValue === option.value ? selectedColor : defaultColor,
              }}
            />
            <span className="text-[#898989] font-semibold text-md">
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
