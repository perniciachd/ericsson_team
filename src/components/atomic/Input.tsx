import { forwardRef } from "react";

type InputProps = {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      name,
      placeholder,
      value,
      onChange,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default Input;