// /packages/core/task/taskQueue.ts

import { Task } from "./types";

// Note: This is a simplified queue that does not handle dependencies.
const taskQueue: Task<any>[] = [];

export function addTask(task: Task<any>) {
  taskQueue.push(task);
}

export function getQueue(): readonly Task<any>[] {
  return taskQueue;
}