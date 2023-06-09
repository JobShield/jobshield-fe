import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { getRandomExample } from "../App";
import { FRAUDULENT_EXAMPLES, LEGIT_EXAMPLES } from "../examples";
import { Input } from "../types";

export default function RandomExampleButtons({
  buttonGroupDirection,
  setValues,
}: {
  buttonGroupDirection: "row" | "column" | undefined;
  setValues: (
    values: React.SetStateAction<Partial<Input>>,
    shouldValidate?: boolean | undefined
  ) => void;
}) {
  return (
    <Flex
      direction={buttonGroupDirection}
      gap={4}
      width={"90%"}
      alignContent={"centre"}
    >
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
        onClick={() => getRandomExample(FRAUDULENT_EXAMPLES, setValues)}
      >
        Fraud Example
      </Button>

      <Button
        colorScheme="green"
        onClick={() => getRandomExample(LEGIT_EXAMPLES, setValues)}
      >
        Legit Example
      </Button>
    </Flex>
  );
}
