import axios from "axios";

export function getPlan(des?: string, schedule?: string) {
  let messages = [
    { role: "system", content: "형식을 항상 일정하게" },
    {
      role: "user",
      content: `${
        ((des as string) + schedule) as string
      } 일별로  DAY : *장소와 활동1(문장형태로) * 장소와 활동2 * 장소와 활동3  이런형식으로 최대한 실존하는 정보로 작성해주고 사족은 생략해줘`,
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0,
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
