import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userState } from "../redux/reducer/User";

export type LoginData = {
  username?: string;
  password?: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState<LoginData>();
  const navigate = useNavigate();
  const loginChange = (e: any) => {
    const { name, value } = e.target;
    setLoginInput((pre) => ({ ...pre, [name]: value }));
  };
  const loginCheck = (e: any) => {
    //console.log(loginInput);
    const { username, password } = loginInput as LoginData;
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem("User", JSON.stringify(res.user));

          const storage = window.localStorage.getItem(
            "User"
          ) as unknown as userState;
          dispatch({
            type: "LOGIN",
            payload: {
              _id: storage._id,
              user: storage.name,
              username: storage.username,
            },
          });

          return navigate("/");
        }
        if (res.status === 400)
          return alert(
            "An account with this username/password does not exists."
          );
      });
  };
  const goJoin = () => {
    navigate("/join");
  };
  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          name="username"
          type="text"
          required
          placeholder="Username"
          onChange={loginChange}
        />
      </div>
      <div>
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          name="password"
          type="password"
          required
          minLength={7}
          placeholder="******************"
          onChange={loginChange}
        />
      </div>
      <div className="flex flex-col justify-between">
        <a
          className="mb-6 inline-block align-baseline font-bold text-sm"
          href="#"
        >
          Forgot Password?
        </a>
        <button
          className="bg-pink text-white font-bold py-2 px-4 rounded"
          onClick={loginCheck}
          type="button"
        >
          Login
        </button>
        <button
          className="bg-white text-pink font-bold py-2 px-4 rounded"
          type="button"
          onClick={goJoin}
        >
          Sign in to your account
        </button>
      </div>
    </div>
  );
};

export default Login;
