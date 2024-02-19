import { useEffect } from "react";
import cookies from "js-cookie";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const checkUserToken = () => {
    const token = cookies.get("jwt_token");

    if (!token) {
      router.push("/login");
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []); 

  return <>Home</>;
};

export default Home;