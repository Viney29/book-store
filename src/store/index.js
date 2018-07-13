// import Vuex from "vuex";
// export const store = new Vuex.Store(
//     state(){

//     },
//     mutations: {

//     }
// )

export const state = () => {
    users: []
}

export const mutations = {
    setUsers(state, data){
        state.users = data;
    }
}
