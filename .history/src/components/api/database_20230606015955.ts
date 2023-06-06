import axios from "axios";
import { ListItem, PlanData } from "../../pages/Plan";

export async function save(
  username: string,
  des: string,
  schedule: string,
  plan: any,
  baggageList: ListItem[]
) {
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
      schedule,
      baggageList,
    }),
  });
  console.log(res);
}

export function getSave(username: string) {
  console.log(3);
  console.log(username);

  return axios({
    url: `http://localhost:8000/save/${username}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
