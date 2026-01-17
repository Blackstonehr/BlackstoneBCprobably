// /packages/core/agent/BrainAgent.ts 
// THE STRATEGIST: Consolidated and Finalized

import { runToolModel } from "../../engine";
import { AgentOutput, Task, Plan, PlannerInput } from "../task/types";
import { BaseAgent } from "./baseAgent";


export class BrainAgent extends BaseAgent {
    async execute(task: Task<PlannerInput>): Promise<AgentOutput<Plan>> {
        const { goal, currentState, availableTools, relevantStrategies } = task.input;

        const system = `You are an expert AI Planner. Your mission is to create a directed acyclic graph (DAG) of operations to achieve a user's goal.
You must use only the available tools provided.
If relevant strategies are provided, you should use them as a starting point for your plan to increase efficiency (Atlas Integration).
Your output must be a valid JSON object representing the plan graph.`; // This system prompt comes from the longer planner.ts

        const prompt = `
            Goal: "${goal}"

            Current State: ${currentState}

            Available Tools: ${availableTools.join(", ")}

            ${relevantStrategies && relevantStrategies.length > 0
                ? `Relevant Strategies from past successes:
                ${relevantStrategies.map(s => `- ${s.description}`).join("\n")}`
                : ""
            }

            Generate the plan.
        `;

        // The schema ensures the output is a machine-readable plan DAG
        const schema = { plan: "The JSON representation of the task graph." }; 

        // Uses runToolModel for structured, reliable JSON output
        const result = await runToolModel({ system, prompt, schema: schema as any });
        
        // Returns the structured plan that the Dispatcher and Task Queue can process
        return { output: result.plan }; 
    }
}