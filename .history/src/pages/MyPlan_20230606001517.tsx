import React, { useEffect, useState } from "react";
import MyPlanList from "../components/MyPlanList";
import { useSelector } from "react-redux";
import { getPlan } from "../components/api/chatGPT";
import axios from "axios";

export type MyPlanProps = {
  item: string;
  id: string;
};
export default function MyPlan() {
  const [mytrip, setMyTrip] = useState<any>();
  const user = useSelector((state: any) => {
    return state.User;
  });
  useEffect(() => {
    getPlan(user.username).then((res) => setMyTrip(res));
  }, []);
  console.log(mytrip);

  return (
    <div>
      <ul className="flex flex-col ">
        <div className="sticky top-0 ">
          <div className="mt-5 bg-lightpink rounded-lg p-2 text-md font-bold text-center  ">
            내 여행 일정
          </div>
          <div className=" border p-3 mt-3 border-stone-300 rounded-lg ">
            {mytrip && mytrip.length == 0 ? (
              <div className="text-4xl font-bold text-stone-300 text-center p-5">
                <h1 className="p-2">여행을</h1>
                <h1 className="p-2">추가해보세요!</h1>
              </div>
            ) : (
              mytrip &&
              mytrip.map((item: any) => (
                <MyPlanList des={item.des} key={item._id} />
              ))
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}
