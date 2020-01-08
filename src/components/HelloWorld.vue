<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >

     {{GetDato}}
    </v-layout>
  </v-container>
</template>

<script>
import {  mapMutations, mapGetters } from "vuex";
import typesProbando from "@/store/types/probando";
export default {
  data(){
    return{
      hola:'Holaaa'
    }
  },
  mounted(){
    
    this.SetDato("Desde Vuex");
  },
  methods:{
    ...mapMutations({
       SetDato: typesProbando.mutations.SetDato,
    })
  },
  computed:{
    ...mapGetters({
       GetDato: typesProbando.getters.GetDato,
    })
  }
};
</script>
