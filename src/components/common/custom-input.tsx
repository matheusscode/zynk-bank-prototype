import React from "react";
import { Input } from "@/ui/input";

interface CustomInputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  label: string;
  value?: string;
  error?: string;
  children?: React.ReactNode;
  event: (field: keyof any, value: string) => void;
  name: string;
  ariaLabel: string;
  placeholder: string;
  type?: string;
  min?: string
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconLeft,
  iconRight,
  className,
  event,
  label,
  error,
  value,
  name,
  ariaLabel,
  placeholder,
  type = "text",
  min,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    event(name as keyof any, value);
  };

  return (
    <div>
      <label className="font-medium ">{label}</label>
      <div
        className={`flex items-center  gap-1 w-auto h-auto border-b-2 border-solid border-neutral-200 ${className}`}
      >
        {iconLeft && <span className="px-1 py-1">{iconLeft}</span>}
        <Input
          type={type}
          className=" w-full outline-none px-1 bg-transparent rounded-none text-[14px] border-none text-md "
          value={value}
          name={label.toLowerCase()}
          placeholder={placeholder}
          aria-label={ariaLabel}
          onChange={handleChange}
          min={min}
          {...rest}
        />
        {iconRight && <span className="mt-2 px-1 py-1">{iconRight}</span>}
      </div>
      <span className="text-red-400 text-md font-medium">{error}</span>
    </div>
  );
};

export default CustomInput;
