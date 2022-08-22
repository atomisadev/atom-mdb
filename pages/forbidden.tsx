import {
  Box,
  Heading,
  Text,
  Button,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Forbidden() {
  return (
    <VStack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        color={useColorModeValue("teal.400", "teal.300")}
      >
        403
      </Heading>
      <Text fontSize="18px">Forbidden</Text>
      <Text color={"gray.500"}>
        Seems like you&apos;re trying to access a page you don&apos;t have
        permission to.
      </Text>

      <Button
        as={"a"}
        colorScheme="teal"
        variant="solid"
        bg={"teal.400"}
        _hover={{
          bg: "teal.300",
        }}
        href="/"
        leftIcon={<ArrowBackIcon />}
      >
        Let me escort you out of here
      </Button>
    </VStack>
  );
}
