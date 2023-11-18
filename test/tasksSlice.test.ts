import tasksReducer, {
  addTask,
  deleteTask,
  toggleTask,
  initTasks,
} from "../src/redux/tasksSlice";
import { Task } from "../src/redux/actions";

describe("tasksSlice", () => {
  describe("initial state", () => {
    it("should handle initial state", () => {
      expect(tasksReducer(undefined, { type: "unknown" })).toEqual([]);
    });
  });

  describe("addTask", () => {
    it("should add a new task", () => {
      const previousState: Task[] = [];
      const newTask = { id: 1, text: "Test Task", done: false };
      expect(tasksReducer(previousState, addTask(newTask))).toEqual([newTask]);
    });
  });

  describe("deleteTask", () => {
    it("should delete a task by id", () => {
      const previousState = [{ id: 1, text: "Test Task", done: false }];
      expect(tasksReducer(previousState, deleteTask(1))).toEqual([]);
    });
  });

  describe("toggleTask", () => {
    it("should toggle the done status of a task", () => {
      const previousState = [{ id: 1, text: "Test Task", done: false }];
      expect(tasksReducer(previousState, toggleTask(1))[0].done).toBe(true);
    });
  });

  describe("initTasks", () => {
    it("should initialize tasks", () => {
      const initialState: Task[] = [];
      const tasks = [{ id: 1, text: "Task 1", done: false }];
      expect(tasksReducer(initialState, initTasks(tasks))).toEqual(tasks);
    });
  });

  describe("not deleteTask", () => {
    it("should not delete a task if id is not found", () => {
      const previousState: Task[] = [{ id: 1, text: "Test Task", done: false }];
      expect(tasksReducer(previousState, deleteTask(2))).toEqual(previousState);
    });
  });

  describe("not toggleTask", () => {
    it("should not toggle the done status if task id is not found", () => {
      const previousState: Task[] = [{ id: 1, text: "Test Task", done: false }];
      expect(tasksReducer(previousState, toggleTask(2))).toEqual(previousState);
    });
  });

  describe("multiple tasks", () => {
    it("should handle multiple tasks correctly", () => {
      const tasks = [
        { id: 1, text: "Task 1", done: false },
        { id: 2, text: "Task 2", done: false },
      ];
      let state = tasksReducer([], addTask(tasks[0]));
      state = tasksReducer(state, addTask(tasks[1]));
      expect(state).toEqual(tasks);
      state = tasksReducer(state, toggleTask(1));
      expect(state[0].done).toBe(true);
      state = tasksReducer(state, deleteTask(2));
      expect(state.length).toBe(1);
    });
  });
});
