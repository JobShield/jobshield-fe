import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface FaqItemProps {
  question: string;
  children: ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg={isOpen ? "orange.200" : ""}
        p={4}
        borderRadius="md"
        _hover={{ bg: "orange.200" }}
        cursor="pointer"
        onClick={handleToggle}
        width={"90vw"}
      >
        <Text>{question}</Text>
        <IconButton
          icon={<ChevronDownIcon />}
          aria-label="Toggle Answer"
          size="sm"
          variant="ghost"
          transform={isOpen ? "rotate(180deg)" : ""}
          transition="all 0.3s"
        />
      </Flex>
      <Collapse in={isOpen}>
        <Box p={4} pl={8} pt={2} fontSize="sm" maxW={"90vw"}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FaqItem;
