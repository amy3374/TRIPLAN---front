import axios from "axios";

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
      return res.data.user;
    }
    if (res.status === 400)
      return alert("An account with this username/password does not exists.");
  });
}
