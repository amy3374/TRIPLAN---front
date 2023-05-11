import axios from "axios";

export function getPlan(des?: string, schedule?: string) {
  let messages = [
    { role: "system", content: "형식을 항상 일정하게" },
    {
      role: "user",
      content: `${
        ((des as string) + schedule) as string
      } 일별로  DAY : - 장소와 활동1(문장형태로) - 장소와 활동2 - 장소와 활동3  이런형식으로 사족은 생략해줘`,
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  return axios({
    url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).then((res) => { console.log(res); return res.data.choices[0].message.content}).catch(res=>{return "DAY 1: -속초해수ㅛㄱ당 -ㅇㄹㄴㄹ -ㅇㄴㄹㄴㅇㄹㄴㅇ DAY 2: -SDSDFDSF -SDFSDFSD -SDFDSF"});
}
