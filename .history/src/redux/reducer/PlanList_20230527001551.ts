import { ListItem, PlanData } from "../../pages/Plan";
type planState = {
  planList?: PlanData;
};
let initialState: planState = {};

export default function PlanList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "INIT") {
    return {
      payload,
    };
  }
  if (type === "DELETE") {
    const updated = { ...state } as PlanData;
    const items = updated[payload.dayId].items.filter(
      (item: any) => item.id !== payload.id
    );
    updated[payload.dayId] = { ...updated[payload.dayId], items };
    return;
    updated;
  }

  return {
    ...state,
  };
}
