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

export default function NotFound() {
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
        404
      </Heading>
      <Text fontSize="18px">Page Not Found</Text>
      <Text color={"gray.500"}>
        Seems you have wandered away, just{" "}
        <Tooltip label="If you didn't get it, it's a classic movie">
          Gone With The Wind.
        </Tooltip>
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
        Wanna go back?
      </Button>
    </VStack>
  );
}
