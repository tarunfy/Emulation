import { Button, Center, Spinner } from "@chakra-ui/react";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, [user]);

  if (!user)
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <div>
      <h1 className="text-white">{user?.name}</h1>
      <Button onClick={logout}>Signout</Button>
    </div>
  );
};

export default Dashboard;
