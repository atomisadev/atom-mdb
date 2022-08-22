import Navbar from "./components/Header/Nav";
import {
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  useColorModeValue,
  Divider,
  Box,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Head from "next/head";

// Firebase Auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../config/Firebase";
import { userAccessToken, fetchUser } from "../utils/fetchUserDetails";

// Routing
import { useRouter } from "next/router";

// TODO: transfer this to a separate file
const descriptions: string[] = [
  "Where you should be writing movie reviews in the first place",
  "Movie reviews for you, completely free",
  "Where the cool kids write movie reviews",
  "Watch out, Demogorgon!",
  "I am running out of description ideas",
  "Just keep swimming 🐟",
  "I drink your milkshake",
  "Did you know that these descriptions change every 5 seconds?",
];

export default function App() {
  // Initialize Firebase Auth
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const signIn = async () => {
    try {
      // Sign in with popup
      const { user } = await signInWithPopup(firebaseAuth, provider);
      const { refreshToken, providerData } = user;

      // Store the refresh token and user information in local storage
      localStorage.setItem("user", JSON.stringify(providerData));
      localStorage.setItem("accessToken", JSON.stringify(refreshToken));

      router.push("/dashboard");
      return;
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => {
    const accessToken = userAccessToken();
    if (accessToken) router.push("/dashboard");
  }, [router]);

  return (
    <>
      <Head>
        <title>Welcome • AMBD</title>
      </Head>
      <Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <VStack spacing={4}>
          <Heading
            fontWeight={"black"}
            fontSize="60px"
            bgGradient={"linear(to-l, teal.500, teal.300)"}
            bgClip={"text"}
          >
            AtomMDB
          </Heading>
          <Text
            fontSize={20}
            color={useColorModeValue("gray.900", "gray.300")}
            fontFamily={"Ubuntu"}
          >
            Movie ratings for the cool kids
          </Text>
          <Box pt={2}>
            <Button
              as={"a"}
              py={6}
              px={6}
              fontSize={18}
              color={useColorModeValue("teal.900", "teal.300")}
              rightIcon={<ArrowForwardIcon />}
              _hover={{
                bg: "teal.800",
              }}
              onClick={() => signIn()}
            >
              Sign in with Google
            </Button>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
