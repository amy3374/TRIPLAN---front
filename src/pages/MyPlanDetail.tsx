import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlanDetail } from '../components/api/database';
import BaggageBox from '../components/BaggageBox';
import { useSelector } from 'react-redux';
import {ListItem} from './Plan'
import PlanBox from '../components/PlanBox';
import { useDispatch } from 'react-redux';
import { edit } from "../components/api/database";

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
  des:string
  schedule:string
  id:string
  username:string
  baggageList:[]
  plan:PlanData
 };
 
 
export default function MyPlanDetail() {
  const [myTripDetail, setMyTripDetail] = useState<MyPlanDetailProps>();
  const {id}=useParams()
  const dispatch = useDispatch()
  const user = useSelector((state: any) => {
    return state.User;
  });
  const plan = useSelector((state: any) => {
    return state.PlanList.planList;
  });
  
  const list = useSelector((state: any) => {
    return state.BaggageList.baggageList;
  });

  
  console.log("plan",plan);
  const planinfo = {des : myTripDetail?.des ,schedule :myTripDetail?.schedule }

  const planEdit=()=>{
    edit(
      user.username,
      id,
      plan,
      myTripDetail?.baggageList,
      myTripDetail?.des as string,
      myTripDetail?.schedule as string,
    );
    console.log("edit",id)
  }
  
  useEffect(() => {
 
    id && getPlanDetail(user.username,id).then((res) => {setMyTripDetail(res.data.planDetail);dispatch({type:"INIT_B", payload:res.data.planDetail.baggageList});dispatch({type:"INIT_P", payload:res.data.planDetail.plan}); });
    
  
    
  }, [id]);
  
  useEffect(()=>{
 
  },[])
  console.log("myTripDetail",myTripDetail?.plan);
 
   return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
     
        
        {
          <PlanBox
            content={plan as PlanData}
            planInfo={planinfo}
          />
        }

        <BaggageBox list={list as ListItem[]} />
      </div>
      <div className='flex'>
        <button
          className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end" 
        >
          후기
        </button>
        <button
          className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end" 
          onClick={planEdit}
        >
          수정
        </button>
      </div>
  </section>
  )
}
