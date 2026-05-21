import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { TASKS, type Task, type Priority, type TaskStatus } from "./mock-data";

interface NewTaskInput {
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
  dueDate: string;
  linkedTo?: string;
  subtasks?: { title: string; assignee: string }[];
}

interface TaskCtx {
  tasks: Task[];
  addTask: (t: NewTaskInput) => Task;
  tasksForTender: (tenderId: string) => Task[];
}

const Ctx = createContext<TaskCtx | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const value = useMemo<TaskCtx>(() => ({
    tasks,
    tasksForTender: (id) => tasks.filter((t) => t.linkedTo === id),
    addTask: (input) => {
      const id = `TSK-${1000 + tasks.length + 1}`;
      const status: TaskStatus = "Not Started";
      const created: Task = {
        id,
        title: input.title,
        description: input.description,
        status,
        priority: input.priority,
        assignee: input.assignee,
        dueDate: input.dueDate,
        linkedTo: input.linkedTo,
        progress: 0,
        subtasks: (input.subtasks ?? []).map((s, i) => ({
          id: `${id}-s${i + 1}`,
          title: s.title,
          done: false,
          assignee: s.assignee,
        })),
        comments: 0,
        attachments: 0,
        updatedAt: new Date().toISOString(),
      };
      setTasks((arr) => [created, ...arr]);
      return created;
    },
  }), [tasks]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTasks() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTasks must be used within TaskProvider");
  return v;
}
