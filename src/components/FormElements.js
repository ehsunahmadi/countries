import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useField } from "react-final-form";

export const InputControl = ({
  name,
  label,
  leftIcon,
  placeholder,
  ...props
}) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4} {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup size="lg">
        {leftIcon && (
          <InputLeftElement pointerEvents="none" children={leftIcon} />
        )}
        <Input
          size="lg"
          {...input}
          isInvalid={meta.error && meta.touched}
          id={name}
          placeholder={placeholder}
        />
      </InputGroup>
      <Error name={name} />
    </Control>
  );
};

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });
  return <FormControl {...rest} isInvalid={error && touched} />;
};

const Error = ({ name }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } });
  return <FormErrorMessage>{error}</FormErrorMessage>;
};
