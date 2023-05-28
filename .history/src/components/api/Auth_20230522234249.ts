export function Login(username: string, password: string) {
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
      }
      if (res.status === 400)
        return alert("An account with this username/password does not exists.");
    });
}
