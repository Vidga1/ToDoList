export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export type TasksState = Task[];

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number; // ID of the task
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number; // ID of the task
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
