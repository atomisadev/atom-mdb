import { userAccessToken, fetchUser } from "../utils/fetchUserDetails";
import { useRouter } from "next/router";
import { useEffect, useState, ReactNode } from "react";
import {
  SimpleGrid,
  Text,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
// Components
import Navbar from "./components/Header/Nav";
import DashboardBody from "./components/Body/DashboardBody";
import MovieCard from "./components/Cards/MovieCard";
import Footer from "./components/Footer/Footer";

// Types/Interfaces
import { IUser } from "../types/IUser";

// This is just for development, soon it will be fetching that information from the API.
import { staticMovies } from "../utils/staticMovies";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    providerId: "",
    uuid: "",
  });

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      router.push("/");
      return;
    }
    const [userInfo] = fetchUser();
    setUser(userInfo);
  }, [router]);

  return (
    <>
      <Head>
        <title>Dashboard • AMBD</title>
      </Head>
      <Navbar user={user} />
      <DashboardBody user={user} />
      <Text mx={"115"} mb="5" color={useColorModeValue("gray.600", "gray.400")}>
        Showing <strong>{staticMovies.length}</strong> results
      </Text>
      <SimpleGrid mx={"115"} gap={5} columns={[1, 2, 3, 4]} flexWrap={"wrap"}>
        {staticMovies.map((movie) => (
          <MovieCard key={movie.name} data={movie} />
        ))}
      </SimpleGrid>
      <Footer />
    </>
  );
}
