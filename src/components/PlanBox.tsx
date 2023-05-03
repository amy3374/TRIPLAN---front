import { planInfo } from "../pages/Home";
import PlanDaily from "./PlanDaily";
import { ListItem, PlanData } from "../pages/Plan";

interface planboxprops {
  content: PlanData;
  planInfo: planInfo;
  onDelete: (id: string) => void;
  onAdd: (newItem: ListItem, dayId?: string) => void;
}

export default function PlanBox({
  content,
  planInfo,
  onDelete,
  onAdd,
}: planboxprops) {
  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        {`${planInfo.des}  ${planInfo.schedule}`}
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        {content &&
          Object.keys(content).map((key: any) => {
            return (
              <PlanDaily
                onDelete={onDelete}
                onAdd={onAdd}
                key={key}
                day={content[key].day}
                content={content[key].items}
                dayId={key}
              />
            );
          })}
      </div>
    </section>
  );
}
