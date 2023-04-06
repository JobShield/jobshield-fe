import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
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
