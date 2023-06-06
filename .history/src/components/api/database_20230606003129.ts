import axios from "axios";
import { ListItem, PlanData } from "../../pages/Plan";

export function save(plan: {}, des: string, id: string) {
  console.log(2);

  return axios({
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
