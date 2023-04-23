import React, { useState } from "react";

interface plandata {
  content: string;
}

export default function PlanBox({ content }: plandata) {
  const [data, setData] = useState<string>(
    " 속초에서 3박 4일 여행을 계획 중이시군요. 속초는 자연이 아름다운 곳으로 유명하며, 해물 요리와 감자전 등 지역 음식도 유명합니다.\n\n일정을 추천해 드리겠습니다.\n\n<strong>1일차:</strong> 속초 도착 - 청초호 수변공원 - 중앙시장 - 해돋이거리 \n\n<strong>2일차:</strong> 속초해변 - 비양도 - 해맞이공원 - 영금정\n\n<strong>3일차:</strong> 양양 해수욕장 - 산호해변 -낙산사 - 고성 미로공원 \n\n<strong>4일차:</strong> 속초 해상케이블카 - 아바이마을 - 속초 출발\n\n이 일정은 여러 가지 테마여행을 즐길 수 있도록 구성해 보았습니다. 다만, 주어진 일정에 따라 약간의 조정이 필요할 수 있습니다."
  );

  const dataRefine = (data: string): string[] => {
    return data.split(".");
  };

  // console.log(dataRefine(data));

  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        속초 3박 4일
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">{data}</div>
    </section>
  );
}
