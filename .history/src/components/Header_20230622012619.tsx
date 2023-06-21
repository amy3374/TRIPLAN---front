import { useEffect } from "react";
import Logo from "./ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import { logout as logOut } from "../components/api/Auth";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((state: any) => {
    return state.User;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem("User") as string);
    console.log(header);

    storage &&
      dispatch({
        type: "LOGIN",
        payload: {
          _id: storage._id,
          name: storage.name,
          username: storage.username,
        },
      });
  }, []);

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    logOut();
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="flex justify-between items-center p-3 px-8 h-[10%]">
      <Link to="/">
        <Logo />
      </Link>
      {user.isLogin ? (
        <div className="flex">
          <button
            className="bg-green p-2 rounded-xl text-white"
            onClick={logout}
          >
            로그아웃
          </button>
          <User user={user} />
        </div>
      ) : (
        <button
          className="bg-green p-2 rounded-xl text-white"
          onClick={goToLogin}
        >
          로그인
        </button>
      )}
    </div>
  );
}
