import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
// import { useLogin } from "./useLogin";

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [hostel, setHostel] = useState("");
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

  function handleLoginPage(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Heading as="h4">Create New Account</Heading>
        <FormRowVertical>
          <Input
            type="text"
            id="fullName"
            // This makes this form better for password managers
            placeholder="Full Name"
            autoComplete="username"
            value={fullName}
            disabled={isLoading}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Input
            type="email"
            id="email"
            placeholder="Your Email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Input
            type="text"
            id="mobileNo"
            placeholder="Your Mobile No."
            autoComplete="mobileNo"
            value={mobileNo}
            disabled={isLoading}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Input
            type="password"
            id="password"
            placeholder="Create Password"
            autoComplete="current-password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Input
            type="text"
            id="enrollment"
            placeholder="Enrollment No."
            autoComplete="current-password"
            value={enrollment}
            disabled={isLoading}
            onChange={(e) => setEnrollment(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Input
            type="select"
            placeholder="Hostel"
            id="enrollment"
            autoComplete="current-password"
            value={hostel}
            disabled={isLoading}
            onChange={(e) => setHostel(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Create Account" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
        <p>
          Already have Account ? <span onClick={handleLoginPage}>Login</span>
        </p>
      </Form>
    </>
  );
}

export default SignUpForm;
