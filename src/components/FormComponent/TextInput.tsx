import { FormControl, Input, Textarea } from "@chakra-ui/react";

type InputFieldProps = {
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: string;
  variant?: string;
  borderColor?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
export default function TextInput({
  name,
  placeholder,
  isRequired,
  type,
  variant,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <FormControl my={4} isRequired={isRequired}>
      {type === "textArea" ? (
        <Textarea
          focusBorderColor="purple.200"
          name={name}
          value={value}
          onChange={onChange}
          variant={variant}
          placeholder={placeholder}
        />
      ) : (
        <Input
          focusBorderColor="purple.200"
          name={name}
          variant={variant}
          placeholder={placeholder}
        />
      )}
    </FormControl>
  );
}
