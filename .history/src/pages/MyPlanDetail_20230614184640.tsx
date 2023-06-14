import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getPlanDetail } from "../components/api/database";
import BaggageBox from "../components/BaggageBox";
import { useSelector } from "react-redux";
import { ListItem } from "./Plan";
import PlanBox from "../components/PlanBox";
import { useDispatch } from "react-redux";

export interface Boxprops {
  list: ListItem[];
}

export type PlanData = {
  [key: string]: any;
  id: string;
  day: number;
  items: ListItem[];
};

export type MyPlanDetailProps = {
  des: string;
  schedule: string;
  // id:string
  username: string;
  baggageList: [];
  plan: PlanData;
};

export default function MyPlanDetail() {
  const [myTripDetail, setMyTripDetail] = useState<MyPlanDetailProps>();
  // const list = myTripDetail?.baggageList
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleClick = () => {
    navigate(`/reviewEdit/${id}`, { state: {} });
  };
  const user = useSelector((state: any) => {
    return state.User;
  });

  const plan = useSelector((state: any) => {
    return state.PlanList.planList;
  });
  useEffect(() => {
    id &&
      getPlanDetail(user.username, id).then((res) =>
        setMyTripDetail(res.data.planDetail)
      );
  }, [id]);
  console.log(myTripDetail);

  useEffect(() => {
    dispatch({ type: "INIT", payload: myTripDetail?.plan });
  }, []);

  const planinfo = { des: myTripDetail?.des, schedule: myTripDetail?.schedule };

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
        {<PlanBox content={plan as PlanData} planInfo={planinfo} />}

        <BaggageBox list={myTripDetail?.baggageList as ListItem[]} />
      </div>
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        후기
      </button>
    </section>
  );
}
