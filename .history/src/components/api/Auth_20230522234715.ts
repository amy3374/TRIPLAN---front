import axios from 'axios';

export function login(username: string, password: string) {
  axios(
    {
        url:"http://localhost:8000/login",
        
    method: "POST",
    body: JSON.stringify({
        username,
        password,
      }),
    }
  )
    
}

, {
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