<template>
  <v-app>
    <template>     
      <v-navigation-drawer
        fixed
        app
        :clipped-left="clipped"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        width="300"
      >
        <app-menu></app-menu>
      </v-navigation-drawer>
    </template>
    <template>
      <!--<v-toolbar dark fixed app color="light-blue darken-4" :clipped-left="clipped">
        <v-toolbar-title>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar-title>
      </v-toolbar>-->
      <div style="flex-basis: 20%">
      <v-toolbar  dark fixed app color="light-blue darken-4" :clipped-left="clipped"
        >
            <v-app-bar-nav-icon @click="cambiar()"></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon class="hidden-xs-only">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
      </div>
      <v-content>
        <router-view/>
      </v-content>
    </template>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import AppMenu from "@/components/shared/AppMenu";
export default {
  name: "App",

  components: {
    
    AppMenu
  },

  data: () => ({
    clipped: true,
    drawer: false
  }),
  methods:{
    cambiar(){
      this.drawer = !this.drawer
    }
  }
};
</script>
