/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "./actions"; // Предполагается, что вы определили тип Task

const initialState: TasksState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    initTasks: (state, action: PayloadAction<Task[]>) => action.payload,
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) =>
      state.filter((task) => task.id !== action.payload),
    toggleTask: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state[index].done = !state[index].done;
      }
    },
  },
});

export const { initTasks, addTask, deleteTask, toggleTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
