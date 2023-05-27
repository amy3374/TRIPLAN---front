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
      const items = state[payload.dayId as string].items.filter((item:ListItem)=>item.id != payload.id)
    return {
      ...state,
      ...state[payload.dayId as string].items : items
    
    };
  }

  return {
    ...state,
  };
}
