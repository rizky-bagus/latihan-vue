// import dependency to handle HTTP request to our back end
// import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  npm: "0620104026",
  nama: "Rizky Bagus",
  kelas: "B2" 
}

//to handle state
const getters = {
    getNpm (state){
        return state.npm
    },

    getNama (state){
        return state.nama
    },

    getKelas (state){
        return state.kelas
    }
}

//to handle actions
const actions = {
    // gerDataMahasiswa ({commit}, payload){}
}

//to handle mutations
const mutations = {
    setNpm (state, newNpm){
        state.npm = newNpm
    },

    setNama (state, newNama){
        state.nama = newNama
    },

    setKelas (state, newKelas){
        state.kelas = newKelas
    }
}

//export store module
export default new Vuex.Store ({
    state : state,
    getters : getters,
    actions : actions,
    mutations : mutations,
    modules: {},
})
/** we have just created a boiler plate for our vuex store module**/