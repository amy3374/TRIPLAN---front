import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getPlanDetail } from "../components/api/database";

export type MyPlanListProps = {
 des:string
 schedule:string
 id:string
 username:string
};

const MyPlanList = ({ des,schedule,username,id}: MyPlanListProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onDelete = (id: string) => {
    dispatch({ type: "DELETE_B", payload: { id } });
  };
  const goToMyPlan=()=>{
     navigate(`/myPlan/${id}`)

     getPlanDetail(username,id)
  }
  return (
    <div onClick={goToMyPlan}>
      <li className="flex items-center justify-between m-1 p-1 hover:scale-[1.005] ease-in duration-150 cursor-default">
        <div>
          <p className="text-lg font-bold ">{des}</p>
          <p className="text-lg font-bold ">{schedule}</p>
          {/* <p className="text-lg font-bold ">일정</p> */}
        </div>
        <button
          className="transition-color hover:text-green  ease-in duration-150 cursor-pointer"
         
        >
          <FaTrashAlt />
        </button>
      </li>
    </div>
  )
}

export default MyPlanList
