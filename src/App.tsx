import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Flex,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { CheckBox } from "./components/CheckBox";
import { ChoiceField } from "./components/ChoiceField";
import { NumberField } from "./components/NumberField";
import { TextField } from "./components/TextField";
import { FRAUDULENT_EXAMPLES, LEGIT_EXAMPLES } from "./examples";
import { cat_column_options, convert, Input, TrueInput } from "./types";

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
  const buttonGroupDirection = useBreakpointValue<"column" | "row" | undefined>(
    {
      base: "column",
      md: "row",
    }
  );
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
              maxW="container.lg"
              p={{ base: 4, md: 8 }}
              mt={{ base: 8, md: 16 }}
            >
              <VStack spacing={6}>
                <Flex direction={buttonGroupDirection} gap={4}>
                  <Button
                    colorScheme="teal"
                    onClick={() =>
                      getRandomExample(
                        [...FRAUDULENT_EXAMPLES, ...LEGIT_EXAMPLES],
                        setValues
                      )
                    }
                  >
                    Random Example
                  </Button>

                  <Button
                    colorScheme="red"
                    onClick={() =>
                      getRandomExample(FRAUDULENT_EXAMPLES, setValues)
                    }
                  >
                    Random Fraud Example
                  </Button>

                  <Button
                    colorScheme="green"
                    onClick={() => getRandomExample(LEGIT_EXAMPLES, setValues)}
                  >
                    Random Legit Example
                  </Button>
                </Flex>

                <Form style={{ width: "100%" }}>
                  <Container
                    maxW="container.md"
                    p={{ base: 4, md: 8 }}
                    mt={{ base: 8, md: 16 }}
                  >
                    <VStack spacing={4} maxW="container.lg">
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

export default App;

const initialValues: Partial<Input> = {};
