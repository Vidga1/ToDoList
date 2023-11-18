export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export type TasksState = Task[];

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

export type TaskActionTypes =
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction;

export const addTask = (task: Task): AddTaskAction => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id: number): DeleteTaskAction => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id: number): ToggleTaskAction => ({
  type: TOGGLE_TASK,
  payload: id,
});
