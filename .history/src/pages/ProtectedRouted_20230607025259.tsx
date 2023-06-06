import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface protectedRouterProps {
  children: React.ReactChild;
}

export default function ProtectedRouted({ children }: protectedRouterProps) {
  const user = useSelector((state: any) => {
    return state.User;
  });
  if (user === undefined) {
    return;
  }
  return user !== null ? children : <Navigate to="/" />;
}
