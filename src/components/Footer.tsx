import { Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex as="footer" p={4} borderTop="1px" borderColor="gray.200" minW="full">
      <Text>AY2023 S1 CS3244 Project</Text>
      <Spacer />
      <Link
        href="https://uvents.nus.edu.sg/event/22nd-steps/module/CS3244/project/3"
        mr={4}
      >
        <Text>22nd STePs</Text>
      </Link>
    </Flex>
  );
};

export default Footer;
