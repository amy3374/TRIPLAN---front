import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMyPlan, getPlanDetail } from "../components/api/database";

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

  const handleDelete = (id: string) => {
    const result = window.confirm(
      `${des} ${schedule} 여행을 삭제 하시겠습니까?`
    );
    if (result) {
      deleteMyPlan(id, username);
      onDelete(id);
    }
  };
  const goToMyPlan = () => {
    navigate(`/myPlan/${id}`);
    getPlanDetail(username, id);
  };

  return (
    <div className="m-1 mx-2">
      <li className="flex items-center justify-between  p-2 px-3 hover:scale-[1.005] ease-in duration-150 cursor-pointer w-full border-stone-200 border-b">
        <div className="flex justify-start items-center " onClick={goToMyPlan}>
          <p className="text-2xl font-bold px-1 ">{des}</p>
          <p className="text-lg font-bold ">{schedule}</p>
        </div>
        <button
          className="transition-color hover:text-stone-300  ease-in duration-150 cursor-pointer"
          onClick={() => handleDelete(id)}
        >
          <FaTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default MyPlanList;
