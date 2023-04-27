import axios from "axios";

export function getPlan(des: string, schedule: string) {
  axios({
    method: "POST",
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: "Bearer" + process.env.REACT_APP_CHAT_GPT_API,
      "Content-Type": "application/json",
    },
  });
}
