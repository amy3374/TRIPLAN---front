import axios from "axios";

export function getPlan(des: string, schedule: string) {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: des + schedule },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  axios({
    url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      Authorization:
        "Bearer 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",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then(res=>res.data.choices[0].messages.content).then(console.log)
  );
}
