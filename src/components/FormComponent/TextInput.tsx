import { FormControl, Input, Textarea } from "@chakra-ui/react";

type InputFieldProps = {
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: string;
  variant?: string;
  borderColor?: string;
};
export default function TextInput({
  name,
  placeholder,
  isRequired,
  type,
  variant,
}: InputFieldProps) {
  return (
    <FormControl my={4} isRequired={isRequired}>
      {type === "textArea" ? (
        <Textarea
          focusBorderColor="purple.200"
          name={name}
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
