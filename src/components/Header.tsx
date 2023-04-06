import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <Flex as="header" p={4} boxShadow="md" minW="full">
      <Box>
        <Text as="span" fontWeight="bold" mr={4}>
          Job Shield
        </Text>
        <Link href="#demo" mr={4}>
          Demo
        </Link>
        <Link href="#faq" mr={4}>
          FAQ
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Text as="span" fontWeight="semibold" mr={4}>
          STePS links:
        </Text>
        <Link
          href="https://uvents.nus.edu.sg/event/22nd-steps/module/CS3244/project/3"
          mr={4}
        >
          Project
        </Link>
        <Link
          href="https://uvents.nus.edu.sg/event/22nd-steps/module/CS3244/project/3"
          mr={4}
        >
          Voting
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
