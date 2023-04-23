import axios from "axios";

export function getPlan(des: string, schedule: string) {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: `${des + schedule} 일별로 오전, 오후, 저녁 일정으로`,
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 1,
  };

  return axios({
    url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_API}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then((res) => res.data.choices[0].message.content);
}
