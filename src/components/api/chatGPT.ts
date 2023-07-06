import axios from "axios";
import { v4 } from "uuid";
import { PlanData } from "../../pages/Plan";

export async function getPlan(des?: string, schedule?: string) {
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

  try {
    const res = await axios({
      url: "https://api.openai.com/v1/chat/completions",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_API}}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    console.log(res);
    const content = res.data.choices[0].message.content;

    const contentObj = toObject(content);

    return contentObj;
  } catch (res_1) {
    const contentObj = toObject(
      "DAY 1: -속초 해수욕장 -대포항에서 회 먹기 -청초호 산책 DAY 2: -속초 냉면먹기 -영랑호 산책 -영랑호 포차거리"
    );
    alert("chat GPT key가 만료되어 test_content(속초 1박 2일)가 전달되었습니다. ")
    return contentObj;
  }
}

function toObject(content: string): PlanData {
  const day = content
    .split(/DAY [0-9]+:/)
    .slice(1)
    .map((items: any, i: any) => {
      return { id: v4(), day: i, items };
    });

  const newList = day.map((item: any) => {
    return {
      ...item,
      items: item.items
        .split("-")
        .slice(1)
        .map((item: any, i: number) => ({ id: v4(), item: item, time: i + 9 })),
    };
  });

  let planObj: any = {};

  newList.forEach((element: PlanData) => {
    planObj[element.id] = element;
  });
  console.log(planObj);

  return planObj;
}
