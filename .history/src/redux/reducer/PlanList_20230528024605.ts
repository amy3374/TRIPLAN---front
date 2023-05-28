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
    const updated = { ...state.planList } as PlanData;
    const items = updated[payload.dayId].items.filter(
      (item: any) => item.id !== payload.id
    );
    updated[payload.dayId] = { ...updated[payload.dayId], items };

    return {
      ...state,
      planList: updated,
    };
  }

  if (type === "ADD_P") {
    const updated = { ...state.planList } as PlanData;
    const updatedItems = [
      ...updated[payload.dayId as string].items,
      payload.newItem,
    ];
    updated[payload.dayId] = {
      ...updated[payload.dayId as string],
      items: updatedItems,
    };
    return {
      ...state,
      planList: updated,
    };
  }

  if (type === "DRAG_START_P") {
    const list = (state.planList as PlanData)[payload.dayId].items;

    return {
      ...state,
      dragIndex: list.findIndex((i: any) => i.id === payload.id),
      dragDayIndex: payload.dayId,
    };
  }

  if (type === "DAY_DROP") {
    const updated = { ...state.planList };
    const list = updated[payload.dayId].items;
    // if (list.length === 0) {
    //   const draglist = updated[payload.dragDayIndex].items;
    //   if (payload.dragIndex == undefined) return;
    //   const dropItemContent = draglist[payload.dragIndex];
    //   draglist.splice(payload.dragIndex, 1);
    //   list.splice(0, 0, dropItemContent);
    //   updated[payload.dayId as string] = {
    //     ...updated[payload.dayId as string],
    //     items: list,
    //   };
    //
    // }

    return {
      ...state,
      planList: updated,
    };
  }

  if (type === "DROP_P") {
    const updated = { ...state.planList };
    const list = updated[payload.dayId].items;
    const dropIndex = list.findIndex((i: any) => i.id === payload.id);
    if (state.dragIndex === undefined) return;

    const dropItemContent = list[state.dragIndex as number];

    if (state.dragDayIndex !== payload.dayId) {
      const draglist = updated[state.dragDayIndex as string].items;
      const dropItemContent = draglist[state.dragIndex];
      draglist.splice(state.dragIndex, 1);
      list.splice(dropIndex, 0, dropItemContent);
    } else {
      console.log("drag" + state.dragIndex);
      console.log("drop" + state.dropIndex);
      list.splice(state.dragIndex, 1);
      list.splice(dropIndex, 0, dropItemContent);
    }
    updated[payload.dayId as string] = {
      ...updated[payload.dayId as string],
      items: list,
    };
    return {
      ...state,
      planList: updated,
    };
  }

  return {
    ...state,
  };
}
