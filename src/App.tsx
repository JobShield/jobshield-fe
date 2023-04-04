import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  NumberInput,
  NumberInputField,
  Select,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { FRAUDULENT_EXAMPLES, LEGIT_EXAMPLES } from "./examples";
import { Input, convert, TrueInput, cat_column_options } from "./types";

const API_URL = "YOUR_API_URL_HERE";

const getRandomExample = (
  examples: Partial<Input>[],
  setValues: (values: Partial<Input>) => void
) => {
  const randomIndex = Math.floor(Math.random() * examples.length);
  const randomExample = examples[randomIndex];
  setValues(randomExample);
};

const App: React.FC = () => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleSubmit = async (values: Partial<Input>) => {
    setLoading(true);
    onOpen();
    const res: TrueInput = convert(values);
    try {
      const response = await axios.post(API_URL, { data: res });
      // TODO: Show Legit / Fraud here.
      setDialogMessage("Success");
    } catch (error: any) {
      setDialogMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setValues }) => (
          <>
            <Container
              maxW="container.md"
              p={{ base: 4, md: 8 }}
              mt={{ base: 8, md: 16 }}
            >
              <VStack spacing={6}>
                <ButtonGroup>
                  <Button
                    colorScheme="teal"
                    onClick={() =>
                      getRandomExample(FRAUDULENT_EXAMPLES, setValues)
                    }
                  >
                    Random Fraudulent Example
                  </Button>

                  <Button
                    colorScheme="green"
                    onClick={() => getRandomExample(LEGIT_EXAMPLES, setValues)}
                  >
                    Random Legit Example
                  </Button>
                </ButtonGroup>

                <Form>
                  <Container
                    maxW="container.md"
                    p={{ base: 4, md: 8 }}
                    mt={{ base: 8, md: 16 }}
                  >
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={closeButtonRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {loading ? "Loading..." : dialogMessage}
            </AlertDialogHeader>

            <AlertDialogBody>{loading ? "Please wait..." : ""}</AlertDialogBody>

            {!loading && (
              <AlertDialogFooter>
                <Button
                  ref={closeButtonRef}
                  colorScheme="blue"
                  onClick={onClose}
                >
                  Close
                </Button>
              </AlertDialogFooter>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
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
