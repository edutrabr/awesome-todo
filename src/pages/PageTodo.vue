<template>
  <q-page>
    <q-list bordered separator>
      <task
        v-for="(task, id) in tasks"
        :key="id"
        :task="task"
        :id="id"
      />
    </q-list>

    <div class="absolute-bottom q-mb-md text-center">
      <q-btn
        @click="showAddtask = true"
        round
        color="primary"
        icon="add"
        size="18px"
      />
    </div>

    <q-dialog v-model="showAddtask">
      <form-add-task @close="showAddtask = false"></form-add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import Task from 'components/TaskComponent.vue'
import formAddTask from 'components/AddTask.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'PageTodo',
  components: {
    Task, formAddTask
  },
  data() {
    return {
      showAddtask: false
    }
  },
  computed: {
      ...mapGetters('tasks', ['tasks']),
  }
}
</script>
