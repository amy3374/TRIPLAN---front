import React, { useEffect, useState } from "react";
import MyPlanList from "../components/MyPlanList";
import { useSelector } from "react-redux";
import { getSave } from "../components/api/database";
import { useDispatch } from "react-redux";
import { PlanData } from "./Plan";

export type MyPlanProps = {
  item: string;
  id: string;
};
export default function MyPlan() {
  const [mytrip, setMyTrip] = useState<any>();
  const dispatch = useDispatch();
  const myPlanList = useSelector((state: any) => {
    return state.MyPlanReducer.myPlanList;
  });
  const user = useSelector((state: any) => {
    return state.User;
  });
  useEffect(() => {
    user &&
      getSave(user.username).then((res) => {
        setMyTrip(res.data.planData);
        //dispatch({ type: "INIT_MP", payload: res.data.planData });
      });
  }, [user]);

  useEffect(() => {
    mytrip && dispatch({ type: "INIT_MP", payload: mytrip });
  }, [mytrip]);

  console.log(myPlanList);

  return (
    <div>
      <ul className="flex flex-col ">
        <div className="sticky top-0 ">
          <div className="mt-5 bg-lighpink rounded-lg p-2 text-md font-bold text-center  ">
            내 여행 일정
          </div>
          <div className=" border p-3 mt-3 border-stone-300 rounded-lg ">
            {myPlanList && myPlanList.length == 0 ? (
              <div className="text-4xl font-bold text-stone-300 text-center p-5">
                <h1 className="p-2">여행을</h1>
                <h1 className="p-2">추가해보세요!</h1>
              </div>
            ) : (
              myPlanList &&
              myPlanList.map((item: any) => (
                <MyPlanList
                  key={item._id}
                  des={item.des}
                  username={user.username}
                  id={item._id}
                  schedule={item.schedule}
                />
              ))
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}
