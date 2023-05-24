import { createStore } from "redux";
import rootReducer from "./reducer/RootReducer";

let store = createStore(rootReducer);

export default store;
