// ChakraUI
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

// Types/Interfaces
import { IUser } from "../../../types/IUser";

export default function DashboardBody({ user }: { user: IUser }) {
  return (
    <>
      <Box px={4} py={8} mx={"100"}>
        <Heading color={useColorModeValue("gray.600", "gray.200")}>
          Welcome, {user?.displayName.split(" ")[0]}!
        </Heading>
        <Text
          mt={3}
          fontFamily={"Ubuntu"}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          This is your user dashboard where you can view all of our movies.
        </Text>
      </Box>
    </>
  );
}
