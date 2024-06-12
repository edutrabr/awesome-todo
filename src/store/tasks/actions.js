import { uid } from 'quasar'

export function updateTask ({ commit }, payload) {
  commit('updateTask', payload);
}

export function deleteTask ({ commit }, id) {
  commit('deleteTask', id);
}

export function addTask ({ commit }, task) {
  let id = uid()
  let payload = {
    id: id,
    task: task
  }
  commit('addTask', payload)
}
