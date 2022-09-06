import { Heading, Button, Flex, Box, VStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <VStack spacing={5}>
          <Heading>AtomMDB</Heading>
          <Text>Movie reviews for the cool kids</Text>
          <Button colorScheme="green" rightIcon={<ArrowForwardIcon />}>
            Sign in with Google
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
