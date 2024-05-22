<template>
  <q-page>
    <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
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
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageTodo',
  data() {
    return {
      tasks: [
        {
          id: '1',
          name: 'Ir ao shopping',
          dueDate: '22/05/2024',
          dueTime: '18:30',
          completed: false
        },
        {
          id: '2',
          name: 'Comprar bananas',
          dueDate: '22/05/2024',
          dueTime: '19:00',
          completed: false
        },
        {
          id: '3',
          name: 'Comprar maçã',
          dueDate: '22/05/2024',
          dueTime: '19:00',
          completed: false
        }
      ]
    }
  }
}
</script>
<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
