import { combineReducers } from "redux";
import BaggageList from "./BaggageList";
import User from "./User";
import PlanList from "./PlanList";

const rootReducer = combineReducers({
  BaggageList,
  User,
  PlanList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
