import {
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Input, cat_column_options } from "../types";
import CheckBox from "./CheckBox";
import ChoiceField from "./ChoiceField";
import NumberField from "./NumberField";
import RandomExampleButtons from "./RandomExampleButtons";
import TextField from "./TextField";

export default function DemoForm({
  handleSubmit,
}: {
  handleSubmit: (values: Partial<Input>) => Promise<void>;
}) {
  const buttonGroupDirection = useBreakpointValue<"column" | "row" | undefined>(
    {
      base: "column",
      sm: "row",
    }
  );

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setValues }) => (
        <>
          <Container
            // maxW="container.lg"
            p={{ base: 4, md: 8 }}
            mt={{ base: 8, md: 16 }}
          >
            <VStack>
              <Heading>Demo</Heading>
              <Text width={"90%"}>
                Test our model using one of our samples or write your own job
                listing. Check out the FAQ below the form if you want to know
                more about this model.
              </Text>

              <RandomExampleButtons
                buttonGroupDirection={buttonGroupDirection}
                setValues={setValues}
              />

              <Form style={{ width: "100%" }}>
                <Container
                  maxW="container.md"
                  p={{ base: 4, md: 8 }}
                  // mt={{ base: 8, md: 16 }}
                >
                  <VStack spacing={4} maxW="container.md">
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
                      {[
                        "telecommuting",
                        "has_company_logo",
                        "has_questions",
                      ].map((name) => (
                        <CheckBox key={name} name={name} />
                      ))}
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
                </Container>
              </Form>
            </VStack>
          </Container>
        </>
      )}
    </Formik>
  );
}

const initialValues: Partial<Input> = {};
