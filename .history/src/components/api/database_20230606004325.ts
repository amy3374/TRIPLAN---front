import axios from "axios";
import { ListItem, PlanData } from "../../pages/Plan";

export async function save(plan: any, des: string, id: string) {
  console.log(2);

  const res = await axios({
    url: `http://localhost:8000/save/${id}`,

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      plan,
      des,
    }),
  });
  if (res.status === 200) {
  }
  if (res.status === 400) {
  }
}

export function getSave(id: string) {
  console.log(3);

  return axios({
    url: `http://localhost:8000/save/${id}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
