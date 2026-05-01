import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const authinformation = useContext(AuthContext);
  return authinformation;
};

export default useAuth;
