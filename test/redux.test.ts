import tasksReducer from "../src/redux/tasksReducer";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  INIT_TASKS,
  TaskActionTypes,
} from "../src/redux/types";

describe("tasks reducer", () => {
  it("should return the initial state", () => {
    expect(tasksReducer(undefined, {} as TaskActionTypes)).toEqual([]);
  });

  it("should handle ADD_TASK", () => {
    expect(
      tasksReducer([], {
        type: ADD_TASK,
        payload: { id: 1, text: "Test Task", done: false },
      }),
    ).toEqual([{ id: 1, text: "Test Task", done: false }]);
  });

  it("should handle DELETE_TASK", () => {
    const startState = [{ id: 1, text: "Test Task", done: false }];
    expect(
      tasksReducer(startState, {
        type: DELETE_TASK,
        payload: 1,
      }),
    ).toEqual([]);
  });

  it("should handle TOGGLE_TASK", () => {
    const startState = [{ id: 1, text: "Test Task", done: false }];
    expect(
      tasksReducer(startState, {
        type: TOGGLE_TASK,
        payload: 1,
      }),
    ).toEqual([{ id: 1, text: "Test Task", done: true }]);
  });

  it("should handle INIT_TASKS", () => {
    const tasks = [{ id: 1, text: "Test Task", done: false }];
    expect(
      tasksReducer([], {
        type: INIT_TASKS,
        payload: tasks,
      }),
    ).toEqual(tasks);
  });
});
