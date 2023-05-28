import { PlanData } from "../../pages/Plan";
type planState = {
  planList?: PlanData;
  dragIndex?: number;
  dragDayIndex?: string;
  dropIndex?: number;
};
let initialState: planState = {};

export default function PlanList(state = initialState, action: any) {
  const { type, payload } = action;
  if (type === "INIT") {
    return {
      planList: { ...payload },
    };
  }
  if (type === "DELETE_P") {
    const updated = { ...state } as PlanData;
    const items = updated[payload.dayId].items.filter(
      (item: any) => item.id !== payload.id
    );
    updated[payload.dayId] = { ...updated[payload.dayId], items };

    return updated;
  }

  if (type === "ADD_P") {
    const updated = { ...state } as PlanData;
    const updatedItems = [
      ...updated[payload.dayId as string].items,
      payload.newItem,
    ];
    updated[payload.dayId] = {
      ...updated[payload.dayId as string],
      items: updatedItems,
    };
    return updated;
  }

  if (type === "DRAG_START_P") {
    const list = (state.planList as PlanData)[payload.dayId].items;

    return {
      ...state,
      dragIndex: list.findIndex((i: any) => i.id === payload.id),
      dragDayIndex: payload.dayId,
    };
  }

  return {
    ...state,
  };
}
