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
export function getPlanDetail(username:string,id:string){
   console.log(4);
  // console.log(id);

  return axios({
    url: `http://localhost:8000/save/${username}/${id}`,

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function edit(
  username: string,
  id:any,
  plan: any,
  baggageList: any,
  des: string,
  schedule: string,
) {
  console.log(5);
  console.log("database id",id);

  const res = await axios({
    url: `http://localhost:8000/saveEdit/${username}/${id}`,

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
      plan,
      baggageList,
      des,
      schedule,
  }),
  });
  console.log(res);
}
export async function deleteMyPlan(
  id:string,
  username:string,
) {
  console.log(6);
  console.log("database id",id);

  const res = await axios({
    url: `http://localhost:8000/deletePlan/${username}/${id}`,

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

  });
  console.log(res);
}

