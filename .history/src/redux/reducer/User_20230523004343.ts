import { ListItem } from "../../pages/Plan";
export type userState = {
  _id?: string;
  name?: string;
  username?: string;
  isLogin: boolean;
};
let initialState: userState = {
  isLogin: false,
};

export default function user(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "LOGIN") {
    const { _id, name, username } = payload;
    return {
      ...state,
      isLogin: true,
      _id,
      name,
      username,
    };
  }
  if (type === "LOGOUT") {
    return {
      ...state,
      isLogin: false,
      _id: undefined,
      name: undefined,
      username: undefined,
    };
  }

  return {
    ...state,
  };
}
