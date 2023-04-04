import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { cat_column_options, convert, Input, TrueInput } from "./types";

const API_URL = "YOUR_API_URL_HERE";

const App: React.FC = () => {
  const handleSubmit = async (values: Partial<Input>) => {
    const res: TrueInput = convert(values);
    try {
      const response = await axios.get(API_URL, { data: values });
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

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

function CheckBox({ name }: { name: string }) {
  return (
    <>
      <label>{name}</label>
      <Field
        id={name}
        name={name}
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          e.target.checked ? 1 : 0
        }
      />
    </>
  );
}

function TextField({ name }: { name: string }) {
  return (
    <>
      <label>{name}</label>
      <Field id={name} name={name} type="text" />
    </>
  );
}

function NumberField({ name }: { name: string }) {
  return (
    <>
      <label>{name}</label>
      <Field id={name} name={name} type="number" />
    </>
  );
}

function ChoiceField({ name, choices }: { name: string; choices: string[] }) {
  return (
    <>
      <label htmlFor={name}>{name}:</label>
      <Field as="select" id={name} name={name}>
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </Field>
    </>
  );
}

export default App;

const initialValues: Partial<Input> = {};
const sample: Partial<Input> = {
  title: "title",
  location: "Mars",
  department: "Aviation",
  company_profile: "Boring",
  description: "babababbabababab abbababababa.",
  requirements: "errrr",
  benefits: "free food",
  salary_lower: 90,
  salary_upper: undefined,
  telecommuting: true,
  has_company_logo: true,
  has_questions: true,
  employment_type: "Other",
  required_experience: "Internship",
  required_education: "Bachelor's Degree",
  industry: "Marketing and Advertising",
  function: "Marketing",
};
