<template>
  <nav>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-tile-content>
          <v-list-item-title class="caption">Nombre del Usuario</v-list-item-title>
          <v-list-item-subtitle class="caption">sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-tile-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item  @click="go('/')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item @click="go('/clientes')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Clientes</v-list-item-title>
      </v-list-item>
      <v-list-group prepend-icon="mdi-home" value="true">
        <template v-slot:activator>
          <v-list-item-title>Ventas</v-list-item-title>
        </template>
        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Comprobantes</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(admin, i) in admins" :key="i" link >
            <span class="subMenu caption">{{admin[0]}}</span>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group no-action  >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Productos </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(crud, i) in cruds" :key="i"  @click="go(crud[2])">
            <span class="subMenu caption">{{crud[0]}}</span>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </nav>
</template>
<script>
export default {
  data: () => ({
    
    
    admins: [["Management", "mdi-home"], ["Settings", "mdi-home"]],
    cruds: [
      ["Categoria", "mdi-home","/categorias"],
      ["Stock", "mdi-home","/stock"],
      ["Productos", "mdi-home", "/productos"],
      
    ]
  }),
  methods:{
     go (url) {
        this.$router.push(url)
    },
  }
};
</script>
<style lang="scss">
.subMenu
{
  color:#5C6BC0;
}
</style>

