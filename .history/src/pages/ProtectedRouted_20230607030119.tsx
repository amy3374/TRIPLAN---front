import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouted({ children }: React.PropsWithChildren) {
  const user = useSelector((state: any) => {
    return state.User;
  });
  //   if (user === undefined) {
  //     return <div></div>;
  //   }
  return user !== undefined ? <div>{children}</div> : <Navigate to="/" />;
}