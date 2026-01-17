// /packages/core/agent/BaseAgent.ts

import { AgentOutput, Task } from "../task/types";

export abstract class BaseAgent {
  /**
   * The single execution method that all agents must implement.
   */
  abstract execute(task: Task<any>): Promise<AgentOutput<any>>;
}