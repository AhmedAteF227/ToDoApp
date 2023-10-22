import { atom, selector } from "recoil";

export const toDoListState = atom({
  key: "toDoList",
  default: [],
});

export const toDoFilterState = atom({
  key: "toDoFilter",
  default: "Show all",
});

export const filteredToDoList = selector({
  key: "filteredToDoList",
  get: ({ get }) => {
    const filter = get(toDoFilterState);
    const list = get(toDoListState);

    switch (filter) {
      case "Show complete":
        return list.filter((item) => item.isComplete);
      case "Show incomplete":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const toDoListStatsState = selector({
  key: "toDoListStatsState",
  get: ({ get }) => {
    const list = get(toDoListState);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.isComplete).length;
    const totalInCompletedNum = list.filter((item) => !item.isComplete).length;
    const percentageCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalInCompletedNum,
      percentageCompleted,
    };
  },
});
