<template>
  <nav>
      <v-list>
   <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Usuario que ha inicado sessión</v-list-item-title>
      </v-list-item-content>
  </v-list-item>
      </v-list>
   <v-divider></v-divider>
   <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </nav>
</template>
<script>
export default {
  data: () => ({
        drawer: null,
        items: [
          { title: 'Opción 1', icon: 'mdi-home' },
          { title: 'Opción 2', icon: 'mdi-delete' },
        ],
  }),
  
};
</script>

