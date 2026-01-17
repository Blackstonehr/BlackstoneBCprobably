// /packages/core/agent/main.ts (The Director's Interface)

// 1. **CORRECTED IMPORTS:** No more '../task/dispatcher'.
import { createTask, Task } from '../task/task';       // Correct path to task creation
import { addTask, getQueue } from '../task/taskQueue'; // Correct path to queue
import { dispatch } from '../dispatcher';             // Correct path for core execution router

// 2. **DELETED IMPORTS:** The obsolete 'planner' import is removed.

/**
 * The System Launcher: Your primary interface as the Director of Systems.
 * It takes a high-level goal and orchestrates the agent system.
 */
async function launchMission(goal: string) {
    console.log(`\n[DIRECTOR] New Mission Received: ${goal}`);

    // --- 1. Planning Phase (Task Type: "plan") ---
    const currentState = 'Codebase is built but unorganized. Structural mandates are in README.md.';
    const availableTools = ['edit', 'generate', 'review']; // Tools registered in dispatcher.ts

    const planTask = createTask("plan", { goal, currentState, availableTools });
    
    // Dispatch sends the 'plan' task to BrainAgent/Planner
    let result = await dispatch(planTask); 
    const plan = result.result?.output?.plan; // Plan is pulled from BrainAgent's output

    if (!plan) {
        console.error("Mission failed: Could not generate a plan.");
        return;
    }

    console.log("[PLANNER] Plan Generated. Starting execution loop...");
    

    // --- 2. Execution Phase (Looping through the Plan) ---
    // The Planner's output (plan) is a JSON object of sequential/dependent tasks.
    for (const stepKey in plan) {
        const step = plan[stepKey];
        // Create task based on the plan step (e.g., 'edit', 'review')
        const task = createTask(step.tool, step.params);
        addTask(task); // Add to the queue
    }

    // Now, execute the tasks sequentially using the Dispatcher
    // NOTE: This loop is simplified (no dependency resolution) but captures the core flow.
    while (getQueue().length > 0) {
        const nextTask = getQueue().find(t => t.status === 'pending');
        if (nextTask) {
            console.log(`[DIRECTOR] Executing Task ${nextTask.id}: ${nextTask.type}`);
            // Dispatch executes the CoderAgent, ReviewerAgent, etc. based on task.type
            await dispatch(nextTask as Task<any>); 
        } else {
            // No ready tasks (e.g., waiting for dependencies), break or wait
            break; 
        }
    }

    console.log("\n[DIRECTOR] Mission Complete. Structure cleanup mission executed.");
}

// ----------------------------------------------------
// Launch the First Mission: Produce Structure from Chaos
// ----------------------------------------------------

launchMission(
    "The monorepo structure is chaotic. **Enforce the structure defined in the READme.md**. Move all shared UI components to the /lib package and all business logic utilities into the /packages/core package. After the migration, run pnpm build."
);