import { Input as ChakraInput, FormControl, FormLabel } from "@chakra-ui/react";
import { Field } from "formik";

export default function TextField({ name }: { name: string }) {
  return (
    <FormControl id={name}>
      <FormLabel>{name}</FormLabel>
      <Field as={ChakraInput} id={name} name={name} type="text" />
    </FormControl>
  );
}
