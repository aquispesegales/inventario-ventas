<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <app-menu></app-menu>
    </v-navigation-drawer>
    <template>
      <div>
        <v-toolbar dense color="primary" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Sistema de Ventas</v-toolbar-title>
        </v-toolbar>
      </div>
      <v-content class="pa-4">
        <router-view />
      </v-content>
    </template>
    <template>
      <v-system-bar color="primary" dark>Gestion - 2020</v-system-bar>
    </template>
  </v-app>
</template>
<script>
import AppMenu from "@/shared/AppMenu.vue";
export default {
  name: "App",

  components: {
    AppMenu
  },

  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
