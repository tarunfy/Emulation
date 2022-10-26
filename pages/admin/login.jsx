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
    <div className="h-screen items-center justify-center flex">
      <form
        onSubmit={handleLogin}
        className="p-10 max-w-lg bg-gray-700 border rounded-lg space-y-5"
      >
        <Center>
          <Image src={accurateLogo} height={100} width={100} />
        </Center>
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
        <Button type="submit" isLoading={isLoading} loadingText="Logging in...">
          Log in
        </Button>
        {error && <p className="text-center text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
