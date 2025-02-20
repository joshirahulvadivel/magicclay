import { FC } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: FC<InputFieldProps> = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
};

export default InputField;
