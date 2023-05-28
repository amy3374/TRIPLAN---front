import { ListItem, PlanData } from "../../pages/Plan";
type planState = {
  planList?: PlanData;
};
let initialState: planState = {};

export default function planList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "ADD") {
    return {
      ...state,
    };
  }
  if (type === "DELETE") {
    return {
      ...state,
    };
  }

  return {
    ...state,
  };
}
