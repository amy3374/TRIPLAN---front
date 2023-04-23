import axios from "axios";

export function getPlan(des: string, schedule: string) {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: des + schedule },
  ];

  const data = {
    model: "text-davinci-003",
    prompt: des + schedule,
    max_tokens: 7,
    temperature: 0,
  };

  return axios({
    url: "https://api.openai.com/v1/completions",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_API}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then(console.log)
  );
}
