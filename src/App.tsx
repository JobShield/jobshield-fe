import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import DemoForm from "./components/DemoForm";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MLResultDialog from "./components/MLResultDialog";
import { Input, TrueInput, convert } from "./types";

const API_URL = "YOUR_API_URL_HERE";

export const getRandomExample = (
  examples: Partial<Input>[],
  setValues: (values: Partial<Input>) => void
) => {
  const randomIndex = Math.floor(Math.random() * examples.length);
  const randomExample = examples[randomIndex];
  setValues(randomExample);
};

const App: React.FC = () => {
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
    <VStack minH="100vh" spacing={0}>
      <Header />
      <Box as="main" flexGrow={1} overflow="auto" minW="full">
        <Box id="landing" minH="100vh"></Box>
        <Box id="demo" minH="100vh">
          <DemoForm handleSubmit={handleSubmit} />
        </Box>
        <Box id="faq" minH="100vh">
          <FAQ />
        </Box>
      </Box>

      <MLResultDialog
        isOpen={isOpen}
        onClose={onClose}
        loading={loading}
        dialogMessage={dialogMessage}
      />
      <Footer />
    </VStack>
  );
};

export default App;
