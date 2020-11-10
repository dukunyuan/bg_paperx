/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token.token)
    },
    delUserId (state) {
      state.userId = ''
      localStorage.removeItem('userId')
    },
    setUserId (state, userId) {
      state.userId = userId
      localStorage.setItem('userId', userId)
    },
    delUserId (state) {
      state.userId = ''
      localStorage.removeItem('userId')
    }
  }
})

export default store
