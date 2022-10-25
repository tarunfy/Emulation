import { Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import Router from "next/router";

const Login = () => {
  const { googleAuth, isLoading, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      Router.push("/admin/dashboard");
    }
  }, [user]);

  return (
    <div className="h-screen items-center justify-center flex">
      <Button
        isLoading={isLoading}
        onClick={googleAuth}
        leftIcon={<FcGoogle />}
        variant="solid"
        className="!bg-gray-700 border border-white/20 hover:!bg-gray-600 !transition !text-white"
      >
        Continue with google
      </Button>
    </div>
  );
};

export default Login;
