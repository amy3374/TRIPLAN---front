import { combineReducers } from "redux";
import BaggageList from "./BaggageList";
import User from "./User";

const rootReducer = combineReducers({
  BaggageList,
  User,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
