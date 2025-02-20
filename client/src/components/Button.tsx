import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ text, onClick, fullWidth }) => {
  return (
    <button
      className={`py-3 px-6 rounded-md bg-black text-white font-bold ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
