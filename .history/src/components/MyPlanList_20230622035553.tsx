import React, { useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMyPlan, getPlanDetail } from "../components/api/database";
import { useSelector } from "react-redux";

export type MyPlanListProps = {
  des: string;
  schedule: string;
  id: string;
  username: string;
  onDelete(id: string): void;
};

const MyPlanList = ({
  des,
  schedule,
  username,
  id,
  onDelete,
}: MyPlanListProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    deleteMyPlan(id, username);
    onDelete(id);
  };
  const goToMyPlan = () => {
    navigate(`/myPlan/${id}`);

    getPlanDetail(username, id);
  };

  return (
    <div>
      <li className="flex items-center justify-between m-1 p-1 hover:scale-[1.005] ease-in duration-150 cursor-default">
        <div onClick={goToMyPlan}>
          <p className="text-lg font-bold ">{des}</p>
          <p className="text-lg font-bold ">{schedule}</p>
          {/* <p className="text-lg font-bold ">일정</p> */}
        </div>
        <button
          className="transition-color hover:text-green  ease-in duration-150 cursor-pointer"
          onClick={() => handleDelete(id)}
        >
          <FaTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default MyPlanList;
