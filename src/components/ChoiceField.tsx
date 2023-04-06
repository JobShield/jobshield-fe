import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Field } from "formik";

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
