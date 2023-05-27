import { ListItem } from "../../pages/Plan";
type baggageState = {
  baggageList: ListItem[];
};
let initialState: baggageState = {
  baggageList: [
    { item: "칫솔", id: "sdf" },
    { item: "치약", id: "sdsd" },
    { item: "치약", id: "asd" },
  ],
};

export default function BaggageList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "ADD") {
    return {
      ...state,
      baggageList: [...state.baggageList, payload.newItem],
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
