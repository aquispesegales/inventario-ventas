import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import probando from '@/store/modules/probando.module.js';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules:{
        probando
    }
  })