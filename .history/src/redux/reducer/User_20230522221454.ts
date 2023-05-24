import { ListItem } from "../../pages/Plan";
type userState = {
  _id: string;
  name: string;
  username: string;
};
let initialState: userState = { _id: "", name: "", username: "" };

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
