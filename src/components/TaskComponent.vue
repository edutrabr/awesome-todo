<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-item
    @click="update(id, {completed: !task.completed})"
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" disable
        class="no-pointer-event"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'task-done' : task.completed}"
      >
        {{task.name}}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
        </div>
        <div class="column">
            <q-item-label class="row justify-end" caption>
              {{ task.dueDate }}
            </q-item-label>
            <q-item-label class="row justify-end" caption>
              {{ task.dueTime }}
            </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div>
        <q-btn
          flat
          round
          dense
          color="blue-12"
          icon="edit"
          @click.stop="$emit('edit')"
        />
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptDelete(id)"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskComponent',
  props: {
    task: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  },
  methods: {
    ...mapActions('tasks',['updateTask', 'deleteTask']),
    update(id, updates) {
      this.updateTask({id: id, updates: updates})
    },
    promptDelete(id) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Deseja excluir?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>
<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
