import { MyPlanListProps } from "../../components/MyPlanList";
type myPlanState = {
  myPlanList:MyPlanListProps[];
};
let initialState: myPlanState = {
    myPlanList: [
  
  ],
};

export default function myPlanReducer(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "INIT_MP") {
    return {
        myPlanList: [...payload],
    };
  }

  if (type === "DELETE_MP") {
    return {
      ...state,
      myPlanList: [
        ...state.myPlanList.filter((item) => item.id !== payload.id),
      ],
    };
  }

  return {
    ...state,
  };
}
