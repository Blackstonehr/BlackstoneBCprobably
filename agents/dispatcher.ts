// /packages/core/dispatcher.ts

import { Task, TaskType } from "./task/types"; 
import { BaseAgent } from "./agent/BaseAgent"; 
// Imports of your specialized agents
import { BrainAgent } from "./agent/brainAgent"; 
import { CoderAgent } from "./agent/coderAgent";
import { ReviewerAgent } from "./agent/reviewerAgent";
import { FsAgent } from "./agent/FsAgent"; 

// The registry maps task types to agent instances
const agentRegistry: Record<TaskType | string, BaseAgent> = {};

// Register agents: This tells the system who handles which task type.
agentRegistry["plan"] = new BrainAgent();
agentRegistry["edit"] = new CoderAgent();
agentRegistry["generate"] = new CoderAgent(); // Coder handles both edit and generate
agentRegistry["review"] = new ReviewerAgent();
agentRegistry["read"] = new FsAgent(); 
agentRegistry["write"] = new FsAgent(); 
agentRegistry["delete"] = new FsAgent(); 


export async function dispatch(task: Task<any>): Promise<Task<any>> {
    const agent = agentRegistry[task.type];

    if (!agent) {
        task.status = "failed";
        task.logs.push(`No agent registered for task type: ${task.type}`);
        return task;
    }

    try {
        task.status = "running";
        const result = await agent.execute(task);
        task.status = "completed";
        task.result = result;
    } catch (error) {
        task.status = "failed";
        task.logs.push(`Agent execution failed: ${(error as Error).message}`);
    }
    return task;
}