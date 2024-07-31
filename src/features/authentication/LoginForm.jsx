import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
// import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const { login, isLoading } = useLogin();
  const isLoading = false;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   }
    // );
  }

  function handleSignUpPage(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <p>
        New User ?{" "}
        <span onClick={handleSignUpPage}>Click here for SignUp Page</span>
      </p>
    </Form>
  );
}

export default LoginForm;
