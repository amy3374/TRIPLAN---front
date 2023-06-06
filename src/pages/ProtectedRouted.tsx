import { Navigate } from "react-router-dom";

export default function ProtectedRouted({ children }: React.PropsWithChildren) {
  const user = window.localStorage.getItem("User");

  return user ? <div>{children}</div> : <Navigate to="/" />;
}
