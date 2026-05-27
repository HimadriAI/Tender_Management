import { U as reactExports, L as jsxRuntimeExports } from "./server-Dx3TIrLK.js";
import { T as TASKS } from "./mock-data-Bbx1JVsp.js";
const Ctx = reactExports.createContext(null);
function TaskProvider({ children }) {
  const [tasks, setTasks] = reactExports.useState(TASKS);
  const value = reactExports.useMemo(() => ({
    tasks,
    tasksForTender: (id) => tasks.filter((t) => t.linkedTo === id),
    addTask: (input) => {
      const id = `TSK-${1e3 + tasks.length + 1}`;
      const status = "Not Started";
      const created = {
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
          assignee: s.assignee
        })),
        comments: 0,
        attachments: 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      setTasks((arr) => [created, ...arr]);
      return created;
    }
  }), [tasks]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value, children });
}
function useTasks() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useTasks must be used within TaskProvider");
  return v;
}
export {
  TaskProvider as T,
  useTasks as u
};
