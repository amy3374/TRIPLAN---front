import React, { useEffect, useState } from "react";
import MyPlanList from "../components/MyPlanList";
import { useSelector } from "react-redux";
import { getSave } from "../components/api/database";

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
    user && getSave(user.username).then((res) => setMyTrip(res.data.planData));
  }, [user]);

  console.log("mytrip",mytrip);

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
            <MyPlanList des={item.des} username={user.username} id={item._id} schedule={item.schedule
                } />
              ))
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}
