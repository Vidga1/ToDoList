import {
  Task,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  INIT_TASKS,
  TaskActionTypes,
} from "./types";

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id: number): TaskActionTypes => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id: number): TaskActionTypes => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const initTasks = (tasks: Task[]): TaskActionTypes => ({
  type: INIT_TASKS,
  payload: tasks,
});
