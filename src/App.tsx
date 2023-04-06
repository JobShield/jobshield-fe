import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import DemoForm from "./components/DemoForm";
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
    <>
      <DemoForm handleSubmit={handleSubmit} />

      <MLResultDialog
        isOpen={isOpen}
        onClose={onClose}
        loading={loading}
        dialogMessage={dialogMessage}
      />
    </>
  );
};

export default App;
