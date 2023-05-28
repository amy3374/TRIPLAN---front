import axios from "axios";
import { userState } from "../../redux/reducer/User";

export function login(username: string, password: string) {
  axios({
    url: "http://localhost:8000/login",

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    if (res.status === 200) {
      window.localStorage.setItem("User", JSON.stringify(res.data.user));
      const storage = window.localStorage.getItem("User") as string;

      return storage;
    }
    if (res.status === 400)
      return alert("An account with this username/password does not exists.");
  });
}
