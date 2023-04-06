import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const backgroundImage = "/background.png";

const Landing: React.FC = () => {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      bg="orange.400"
      bgImage={`url(${backgroundImage})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" color="white">
          Job Shield
        </Heading>
        <Text fontSize="xl" color="white" maxW="md" textAlign="center">
          A machine learning solution that identifies fraudulent online job
          postings. Scroll down and try testing it yourself!
        </Text>
        <Button
          rightIcon={<ChevronDownIcon />}
          textColor="black"
          bg={"white"}
          variant="solid"
          onClick={() => {
            const demoElement = document.getElementById("demo");
            if (demoElement) {
              demoElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Try it now
        </Button>
      </VStack>
    </Flex>
  );
};

export default Landing;
