import { combineReducers } from "redux";
import BaggageList from "./BaggageList";
import User from "./User";
import PlanList from "./PlanList";
import MyPlanReducer from "./MyPlanReducer";

const rootReducer = combineReducers({
  BaggageList,
  User,
  PlanList,
  MyPlanReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
