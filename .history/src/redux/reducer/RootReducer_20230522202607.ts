import { combineReducers } from "redux";
import BaggageList from "./BaggageList";

const rootReducer = combineReducers({
  BaggageList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
