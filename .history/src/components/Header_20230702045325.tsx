import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import { getItemWithExpireTime, logout as logOut } from "../components/api/Auth";

export default function Header() {
  const navigate = useNavigate();
  const [showImg, setShowImg] = useState<boolean>(false);
  const user = useSelector((state: any) => {
    return state.User;
  });
  const dispatch = useDispatch();

  const resizingHandler = () => {
    if (window.innerWidth <= 700) {
      setShowImg(true);
    } else {
      setShowImg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);
  useEffect(() => {
    const storage = JSON.parse(getItemWithExpireTime("User"))


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
          >로그아웃
          </button>
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
      </div>
      <Link to="/">
        <Logo />
      </Link>
      {user.isLogin ? (
        <div className="flex justify-between">  
          <div className="logout">
            <button
              className="bg-white mt-0 border-2 border-green p-2 h-12 rounded-xl text-green font-bold"
              onClick={logout}
            >로그아웃
            </button>
            <User user={user}/>
            <div className="mt-2">
              <Link to="/myPlan"><FontAwesomeIcon icon={faUser} size='xl' color='gray'/></Link>
            </div>
          </div>
          
          <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
          </div>
        </div>
      ) : (
        <div className="login flex justify-between">
          <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
          </div>
          <button
          className="bg-white border-2 border-pink p-3 h-12 rounded-xl text-pink font-bold"
          onClick={goToLogin}
            >
            로그인
          </button>
        </div>
        
      )}
      
    </div>
  );
}
