export function tasks(state) {
  return state.tasks;
}

export function getTask(state) {
  return (id) => state.tasks[id]
}
