import { ListItem, PlanData } from "../../pages/Plan";
type planState = {
  planList?: PlanData;
};
let initialState: planState = {
  planList,
};

export default function BaggageList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "ADD") {
    return {
      ...state,
      baggageList: [
        ...state.baggageList,
        {
          item: payload.item,
          id: payload.id,
        },
      ],
    };
  }
  if (type === "DELETE") {
    return {
      ...state,
      baggageList: [
        ...state.baggageList.filter((item) => item.id !== payload.id),
      ],
    };
  }

  return {
    ...state,
  };
}
