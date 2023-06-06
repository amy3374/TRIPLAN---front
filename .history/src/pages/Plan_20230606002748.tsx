import React, { useEffect } from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { save } from "../components/api/database";

export type ListItem = {
  id: string;
  item: string;
};
export type PlanData = {
  [key: string]: any;
  id: string;
  day: number;
  items: ListItem[];
};

export default function Plan() {
  const dispatch = useDispatch();
  const location = useLocation();
  const list = useSelector((state: any) => {
    return state.BaggageList.baggageList;
  });
  const plan = useSelector((state: any) => {
    return state.PlanList.planList;
  });
  const user = useSelector((state: any) => {
    return state.User;
  });
  console.log(plan);

  const handleClick = () => {
    console.log(1);

    save(plan, location.state.planInfo.des, user.username);
  };
  useEffect(() => {
    // console.log(JSON.parse(location.state.res));
    dispatch({ type: "INIT", payload: location.state.res });
  }, []);

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
        {
          <PlanBox
            content={plan as PlanData}
            planInfo={location.state.planInfo}
          />
        }

        <BaggageBox list={list} />
      </div>
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        저장
      </button>
    </section>
  );
}
