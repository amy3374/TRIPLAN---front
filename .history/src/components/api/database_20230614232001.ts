import axios from "axios";
import { ListItem, PlanData } from "../../pages/Plan";

export async function save(
  username: string,
  des: string,
  schedule: string,
  plan: any,
  baggageList: ListItem[]
) {
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
}

export function getSave(username: string) {
  return axios({
    url: `http://localhost:8000/save/${username}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export function getPlanDetail(username: string, id: string) {
  return axios({
    url: `http://localhost:8000/save/${username}/${id}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function saveReview(id: string, content: string) {
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
}
