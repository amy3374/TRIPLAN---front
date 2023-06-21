import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { edit, getPlanDetail, getReview } from "../components/api/database";
import BaggageBox from "../components/BaggageBox";
import { useSelector } from "react-redux";
import { ListItem } from "./Plan";
import PlanBox from "../components/PlanBox";
import Review from "../components/Review";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState<string>();
  const handleClick = () => {
    navigate(`/reviewEdit/${id}`, { state: { review } });
  };
  const user = useSelector((state: any) => {
    return state.User;
  });
  const plan = useSelector((state: any) => {
    return state.PlanList.planList;
  });

  const list = useSelector((state: any) => {
    return state.BaggageList.baggageList;
  });

  const planEdit = () => {
    edit(
      user.username,
      id,
      plan,
      myTripDetail?.baggageList,
      myTripDetail?.des as string,
      myTripDetail?.schedule as string
    );
  };

  useEffect(() => {
    id &&
      getPlanDetail(user.username, id).then((res) => {
        dispatch({ type: "INIT_P", payload: res.data.planDetail.plan });
        dispatch({ type: "INIT_B", payload: res.data.planDtail.baggageList });
      });
    id &&
      getPlanDetail(user.username, id).then((res) =>
        setMyTripDetail(res.data.planDetail)
      );
    id &&
      getReview(id).then((res) => {
        res.review !== null && setReview(res.review.content);
      });
  }, [id]);
  console.log(myTripDetail);

  const planinfo = { des: myTripDetail?.des, schedule: myTripDetail?.schedule };

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
        {<PlanBox content={plan as PlanData} planInfo={planinfo} />}

        <BaggageBox list={list as ListItem[]} />
      </div>
      <button
        onClick={planEdit}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        수정
      </button>
      {review && <Review content={review} />}

      <button
        onClick={handleClick}
        className="bg-green p-2  text-white rounded-lg m-2 min-w-fit w-16 self-end"
      >
        {review ? "수정" : "후기 작성"}
      </button>
    </section>
  );
}
