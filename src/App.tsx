import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { cat_column_options, convert, Input, TrueInput } from "./types";

const API_URL = "YOUR_API_URL_HERE";

const App: React.FC = () => {
  const handleSubmit = async (values: Partial<Input>) => {
    const res: TrueInput = convert(values);
    try {
      const response = await axios.post(API_URL, { data: res });
      if (response.data) {
        // Show success message
        alert("Success: " + response.data);
      } else {
        // Show error message
        alert("Error");
      }
    } catch (error: any) {
      // Show error message
      alert("Error: " + error.message);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <VStack spacing={4}>
            <>
              {[
                "title",
                "location",
                "department",
                "company_profile",
                "description",
                "requirements",
                "benefits",
              ].map((name) => (
                <TextField key={name} name={name} />
              ))}
            </>

            <>
              {["salary_lower", "salary_upper"].map((name) => (
                <NumberField key={name} name={name} />
              ))}
            </>

            <>
              {["telecommuting", "has_company_logo", "has_questions"].map(
                (name) => (
                  <CheckBox key={name} name={name} />
                )
              )}
            </>

            <>
              {Object.entries(cat_column_options).map(
                ([categoryName, choices]) => (
                  <ChoiceField
                    key={categoryName}
                    name={categoryName}
                    choices={choices}
                  />
                )
              )}
            </>

            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

function CheckBox({ name }: { name: string }) {
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

function TextField({ name }: { name: string }) {
  return (
    <FormControl id={name}>
      <FormLabel>{name}</FormLabel>
      <Field as={ChakraInput} id={name} name={name} type="text" />
    </FormControl>
  );
}

function NumberField({ name }: { name: string }) {
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

function ChoiceField({ name, choices }: { name: string; choices: string[] }) {
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

export default App;

const initialValues: Partial<Input> = {};
