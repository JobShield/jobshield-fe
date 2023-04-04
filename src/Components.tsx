import {
  Checkbox,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import { Field } from "formik";

export function CheckBox({ name }: { name: string }) {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor={name} mb="0">
        {name}
      </FormLabel>
      <Field name={name}>
        {({ field, form }: any) => (
          <Checkbox
            {...field}
            isChecked={field.value}
            onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
          />
        )}
      </Field>
    </FormControl>
  );
}
export function TextField({ name }: { name: string }) {
  return (
    <FormControl id={name}>
      <FormLabel>{name}</FormLabel>
      <Field as={ChakraInput} id={name} name={name} type="text" />
    </FormControl>
  );
}
export function NumberField({ name }: { name: string }) {
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
export function ChoiceField({
  name,
  choices,
}: {
  name: string;
  choices: string[];
}) {
  return (
    <FormControl id={name}>
      <FormLabel htmlFor={name}>{name}:</FormLabel>
      <Field as={Select} id={name} name={name}>
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </Field>
    </FormControl>
  );
}
