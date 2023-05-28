import { planInfo } from "../pages/Home";
import PlanDaily from "./PlanDaily";
import { PlanData } from "../pages/Plan";

interface planboxprops {
  content: PlanData;
  planInfo: planInfo;
}

export default function PlanBox({ content, planInfo }: planboxprops) {
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
