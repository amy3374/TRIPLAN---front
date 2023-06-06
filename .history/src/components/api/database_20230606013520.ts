import axios from "axios";
import { ListItem, PlanData } from "../../pages/Plan";

export async function save(plan: any, des: string, username: string) {
  console.log(2);

  const res = await axios({
    url: `http://localhost:8000/save/${username}`,

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
      plan,
      des,
    }),
  });
  console.log(res);
}

export function getSave(username: string) {
  console.log(3);

  return axios({
    url: `http://localhost:8000/save/${username}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
    }),
  });
}
