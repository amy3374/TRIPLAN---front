import { ListItem } from "../../pages/Plan";
type userState = {
  _id: string;
  name: string;
  username: string;
};
let initialState: userState = { _id: "", name: "", username: "" };

export default function BaggageList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "LOGIN") {
    const { _id, name, username } = payload;
    return {
      ...state,
      _id,
      name,
      username,
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
