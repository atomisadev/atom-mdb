import { userAccessToken, fetchUser } from "../utils/fetchUserDetails";
import { useRouter } from "next/router";
import { useEffect, useState, ReactNode } from "react";

// Components
import Navbar from "./components/Header/Nav";

interface IUser {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uuid: string;
}

const defaultObject = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  providerId: "",
  uuid: "",
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<IUser>(defaultObject);

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
      <Navbar user={user} />
    </>
  );
}
