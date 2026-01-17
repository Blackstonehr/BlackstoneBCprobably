// /packages/core/task/types.ts

// --- Core System Types ---
export type TaskType = "plan" | "edit" | "generate" | "review" | "read" | "write" | "delete";

export interface AgentOutput<T> {
  output: T;
}

// --- FsAgent Types (File System I/O Contract) ---
export interface FsInput {
  type: "read" | "write" | "delete";
  path: string;
  content?: string; 
}

export interface FsOutput {
  status: "success" | "error";
  content?: string; 
}

// --- Task Structure ---
export interface Task<T> {
  id: string;
  type: TaskType;
  input: T;
  status: "pending" | "running" | "completed" | "failed";
  logs: string[];
  result?: AgentOutput<any>;
}

// --- Atlas/Learning Types ---
// Data model for strategies retrieved from the Atlas
export interface Strategy {
  id: string;
  description: string;
  usedFor: string;
  successRate: number;
}

// Data model for a complete successful operation/run
export interface Trace {
  goal: string;
  initialState: string;
  finalState: string;
  plan: Plan;
  status: 'success' | 'failure';
}

// --- Planner Types (Used by BrainAgent) ---
export interface PlannerInput {
  goal: string;
  currentState: string;
  availableTools: string[];
  relevantStrategies?: Strategy[]; // Correctly uses the Strategy type
}

// The core structure of the machine-readable plan DAG
export interface Plan {
  [step: string]: {
    tool: TaskType;
    params: Record<string, any>;
    dependencies: string[];
  };
}


// --- Reviewer Input ---
export interface ReviewInput {
    file: string;
    instruction: string;
    originalContent: string;
    coderOutput: {
        modifiedContent: string;
        reflection: {
            expected: string;
            actual: string;
        };
    };
}