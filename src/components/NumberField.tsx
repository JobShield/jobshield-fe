import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { Field } from "formik";

export default function NumberField({ name }: { name: string }) {
  return (
    <FormControl id={name}>
      <FormLabel>{name}</FormLabel>
      <Field name={name}>
        {({ field, form }: any) => (
          <NumberInput
            value={field.value}
            onChange={(value) => form.setFieldValue(field.name, value)}
          >
            <NumberInputField />
          </NumberInput>
        )}
      </Field>
    </FormControl>
  );
}
