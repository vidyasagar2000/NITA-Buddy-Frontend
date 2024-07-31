import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
// import { useLogout } from "./useLogout";

function Logout() {
  // const { logout, isLoading } = useLogout();
  const isLoading = false;

  return (
    // <ButtonIcon disabled={isLoading} onClick={logout}>
    <ButtonIcon disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
