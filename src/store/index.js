/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : '',
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token.token)
    },
    delToken (state) {
      state.userId = ''
      localStorage.removeItem('token')
    },
    setUserId (state, userId) {
      state.userId = userId
      localStorage.setItem('userId', userId)
    },
    delUserId (state) {
      state.userId = ''
      localStorage.removeItem('userId')
    },
    setUsername (state, username) {
      state.username = username
      localStorage.setItem('username', username)
    },
    delUsername (state) {
      state.userId = ''
      localStorage.removeItem('username')
    }
  }
})

export default store
