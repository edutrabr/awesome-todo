<template>
  <q-card>
      <q-card-section class="row">
        <div class="text-h6">Adicionar Tarefa</div>
        <q-space/>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-card-section>

      <q-form @submit="onSubmit">
        <q-card-section class="q-pt-none">
          <q-input
            outlined
            v-model="task.name"
            label="Tarefa*"
            class="q-mb-xs"
            :rules="[val => !!val || 'Campo requerido']"
          />

          <q-input
            v-model="task.dueDate"
            outlined
            type="date"
            label="Data"
            class="q-mb-xs"
          />

          <q-input
            v-model="task.dueTime"
            outlined
            type="time"
            label="Hora"
            class="q-mb-xs"
          />
        </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="SALVAR" color="primary" type="submit"/>
          </q-card-actions>
      </q-form>
    </q-card>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  // name: 'ComponentName',
  data () {
    return {
      task: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    onSubmit() {
      this.addTask(this.task)
      this.$emit('close')
    }
  }
}
</script>
