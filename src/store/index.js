// import Vuex from "vuex";
// export const store = new Vuex.Store(
//     state(){

//     },
//     mutations: {

//     }
// )

// export const state = () => {
//     users: []
// }

// export const mutations = {
//     setUsers(state, data){
//         state.users = data;
//     }
// }

import Vuex from 'vuex';
const store = () => {
  return new Vuex.Store({
    state: {
        users: []
    },
    // computed properties
    getters: {
      // ...
    },
    // methods e.g make api calls, never update the state (use mutations for this)
    actions: {
        setUsers({commit}, data){
            commit("addUsers", data);
        }
    },
    // setting and updating the state
    mutations: {
        addUsers(state, users){
            state.users = users;
        }
    }
  })
}

export default store;