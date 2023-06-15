import { ListItem } from "../../pages/Plan";
type baggageState = {
  baggageList: ListItem[];
};
let initialState: baggageState = {
  baggageList: [
  
  ],
};

export default function BaggageList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "INIT_B") {
    return {
      baggageList: [...payload],
    };
  }
  if (type === "ADD_B") {
    return {
      ...state,
      baggageList: [...state.baggageList, payload.newItem],
    };
  }
  if (type === "DELETE_B") {
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
