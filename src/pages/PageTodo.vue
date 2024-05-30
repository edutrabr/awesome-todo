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
  </q-page>
</template>

<script>
import Task from 'components/TaskComponent.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'PageTodo',
  components: {
    Task
  },
  data() {
    return {

    }
  },
  computed: {
      ...mapGetters('tasks', ['tasks']),
  }
}
</script>
