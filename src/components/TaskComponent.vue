<!-- eslint-disable vue/no-mutating-props -->
<template>
  <q-item
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
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
  </q-item>
</template>

<script>
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
  }
}
</script>
<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
