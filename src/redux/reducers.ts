import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "./actions";

const initialState: TasksState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    initTasks: (_, action: PayloadAction<Task[]>) => action.payload,
    addTask: (state, action: PayloadAction<Task>) => [...state, action.payload],
    deleteTask: (state, action: PayloadAction<number>) =>
      state.filter((task) => task.id !== action.payload),
    toggleTask: (state, action: PayloadAction<number>) =>
      state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      ),
  },
});

export const { initTasks, addTask, deleteTask, toggleTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
