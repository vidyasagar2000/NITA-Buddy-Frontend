import styled from "styled-components";
import Logo from "../ui/Logo";
import SignUpForm from "../features/authentication/SignUpForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-100);
`;

function SignUp() {
  return (
    <LoginLayout>
      <Logo />
      <SignUpForm />
    </LoginLayout>
  );
}

export default SignUp;
