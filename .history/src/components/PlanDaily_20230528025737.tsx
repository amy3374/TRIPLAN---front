import Input from "./Input";
import { ListItem } from "../pages/Plan";
import PlanItem from "./PlanItem";
import { useDispatch } from "react-redux";

interface PlanDailyProps {
  day: number;
  content: any;
  dayId: string;
}
export default function PlanDaily({ day, content, dayId }: PlanDailyProps) {
  const dispatch = useDispatch();
  const onDayDrop = (dayId: string) => {
    dispatch({ type: "DAY_DROP", payload: { dayId } });
  };
  return (
    <section
      className="p-2"
      onDragOver={(e: any) => {
        e.preventDefault();
      }}
      onDrop={(e: any) => {
        e.preventDefault();
        onDayDrop(dayId);
      }}
    >
      <p className="text-xl font-bold">DAY {day + 1}</p>
      <ul className="m-2 ">
        {content.length > 0 ? (
          content.map((item: ListItem, i: number) => {
            return <PlanItem {...item} key={item.id} dayId={dayId} time={i} />;
          })
        ) : (
          <div className="text-4xl font-bold text-stone-300 text-center p-5">
            <h1 className="p-2">일정을</h1>
            <h1 className="p-2">추가해보세요!</h1>
          </div>
        )}
      </ul>
      <Input color="pink" dayId={dayId} component="Plan" />
    </section>
  );
}
