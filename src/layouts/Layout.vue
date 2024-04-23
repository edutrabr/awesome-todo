<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      breakpoint="500"
    >
      <q-list>
        <q-item-label header>
          Navigation
        </q-item-label>

         <q-item
          clickable
          exact
          to="/"
          >
          <q-item-section avatar>
            <q-icon name="checklist" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Todo</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          exact
          to="/settings"
          >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-show="$q.screen.lt.sm">
      <q-tabs class="text-white">
        <q-route-tab name="Todo" icon="checklist" to="/" exact/>
        <q-route-tab name="Settings" icon="settings" to="/settings" exact/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      //leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      leftDrawerOpen: true
    }
  }
})
</script>
