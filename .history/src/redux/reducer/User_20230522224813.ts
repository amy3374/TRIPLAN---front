import { ListItem } from "../../pages/Plan";
export type userState = {
  _id: string;
  name: string;
  username: string;
};
let initialState: userState = { _id: "`", name: "2", username: "2" };

export default function user(state = initialState, action: any) {
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
  if (type === "LOGOUT") {
    return {
      ...state,
      _id: undefined,
      name: undefined,
      username: undefined,
    };
  }

  return {
    ...state,
  };
}
