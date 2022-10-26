import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Router from "next/router";
import accurateLogo from "../../public/images/accurate.png";
import Image from "next/image";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { login, isLoading, user, error } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      Router.push("/admin/dashboard");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <Head>
        <title>Emulation || Admin Login</title>
        <meta
          name="description"
          content="Admin login page for AIMT technical club"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen items-center justify-center flex">
        <form
          onSubmit={handleLogin}
          className="p-10 max-w-lg bg-gray-700 border rounded-lg "
        >
          <Center className="mb-8">
            <div className="h-20 w-20 !rounded-full !relative">
              <Image
                src={accurateLogo}
                layout="fill"
                className="!rounded-full"
              />
            </div>
          </Center>
          <div className="space-y-5">
            <Input
              placeholder="Email"
              type="email"
              required
              className="text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup>
              <Input
                className="text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Logging in..."
            >
              Log in
            </Button>
            {error && (
              <p className="text-center text-red-500 text-sm">{error}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
