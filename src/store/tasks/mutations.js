export function updateTask (state, payload) {
  Object.assign(state.tasks[payload.id], payload.updates)
}

export function deleteTask (state, id) {
  delete state.tasks[id]
}

export function addTask (state, payload) {
  state.tasks[payload.id] = payload.task
}
