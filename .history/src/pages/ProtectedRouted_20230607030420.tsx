import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouted({ children }: React.PropsWithChildren) {
  const user = useSelector((state: any) => {
    return state.User;
  });
  const User = window.localStorage.getItem("User");
  if (user === undefined) {
    return <div></div>;
  }
  console.log(User);

  return User ? <div>{children}</div> : <Navigate to="/" />;
}
