// /packages/core/task/task.ts

import { Task, TaskType } from "./types";

let taskIdCounter = 1;

export function createTask(type: TaskType, input: any): Task<any> {
  return {
    id: `task-${taskIdCounter++}`,
    type,
    input,
    status: "pending",
    logs: [],
  };
}