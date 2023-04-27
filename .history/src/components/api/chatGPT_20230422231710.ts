import axios from "axios";

export function getPlan(des: string, schedule: string) {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "속초 3박4일" },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    n: 1,
    messages: messages,
  };

  axios({
    method: "POST",
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: "Bearer" + process.env.REACT_APP_CHAT_GPT_API,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then(console.log);
}
