export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export type TasksState = Task[];

export const INIT_TASKS = "INIT_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

interface InitTasksAction {
  type: typeof INIT_TASKS;
  payload: TasksState;
}
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
  | InitTasksAction
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction;
