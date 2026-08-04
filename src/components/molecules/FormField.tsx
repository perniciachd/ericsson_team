import FormLabel from "../atomic/Label";
import Input from "../atomic/Input";

type FormFieldProps = {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
};

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  inputRef,
}: FormFieldProps) => {
  return (
    <div className="field">
      <FormLabel text={label} />

      <Input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;