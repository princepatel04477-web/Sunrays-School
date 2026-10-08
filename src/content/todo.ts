/**
 * Helper type and registry for placeholders awaiting verification or content from the client.
 * Any unknown value is a typed TODO_CLIENT placeholder that renders as an obvious dev-only marker
 * and is listed by `npm run content:todo`.
 */

export interface TodoItem {
  id: string;
  field: string;
  location: string;
  currentValue: string;
  notes?: string;
}

export const todoRegistry: TodoItem[] = [];

export function markTodo(
  field: string,
  location: string,
  currentValue: string,
  notes?: string
): string {
  const item: TodoItem = {
    id: `${location}::${field}`,
    field,
    location,
    currentValue,
    notes,
  };
  todoRegistry.push(item);
  return currentValue;
}

export type TodoClient<T = string> = T;
