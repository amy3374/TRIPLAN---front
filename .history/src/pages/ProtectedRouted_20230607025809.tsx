import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouted({
  children,
}: React.PropsWithChildren<Record<never, any>>) {
  const user = useSelector((state: any) => {
    return state.User;
  });
  if (user === undefined) {
    return;
  }
  return user !== null ? children : <Navigate to="/" />;
}
