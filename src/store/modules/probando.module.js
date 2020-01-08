import types from "@/store/types/probando";

const state = {
    dato:null
};

const getters = {
    [types.getters.GetDato]: state => {
        return state.dato;
    }
}
const actions = {
   
}
const mutations = {
    [types.mutations.SetDato]: (state, obj) => {
        
        state.dato = obj;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
  };
  