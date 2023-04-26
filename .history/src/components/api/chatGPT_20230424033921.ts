import axios from "axios";

export function getPlan(des?: string, schedule?: string) {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: `${
        ((des as string) + schedule) as string
      } 일별로 DAY : 일정1 - 일정2 - ... 이런형식으로 작성해줘`,
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.5,
  };

  console.log(process.env.REACT_APP_CHAT_GPT_API);

  return axios({
    url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then((res) => res.data.choices[0].message.content);
}
