// import Vue from 'vue'
import { createStore } from 'vuex'
import data from './data.js'

// Vue.use(Vuex)

function getUserInfo (state) {
  if (state.userInfo) return state.userInfo
  let userInfo = localStorage.getItem(keys.USER)
  if (userInfo) {
    state.userInfo = JSON.parse(userInfo)
  }
  return state.userInfo
}
const keys = { USER: 'user' }

function getMenuInfo (state) {
  if (state.menuInfo) return state.menuInfo
  let menuInfo = localStorage.getItem(menus.MENU)
  if (menuInfo) {
    state.menuInfo = JSON.parse(menuInfo)
  }
  return state.menuInfo
}
function getPageTitle (state) {
  if (state.pagetitle) return state.pagetitle
  let pageTitle = localStorage.getItem(menus.PAPGETITLE)
  if (pageTitle) {
    state.pagetitle = pageTitle
  }
  return state.pagetitle
}
const menus = { MENU: 'menu', PAPGETITLE: 'pagetitle' }

const system = {
  state: {
    isLoading: false,
    userInfo: null,
    menuInfo: null,
    IpAddress: '',
    pageData: {},
    oldPath: ''
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
      localStorage.setItem(keys.USER, JSON.stringify(data))
    },
    setMenuInfo (state, data) {
      state.menuInfo = data
      localStorage.setItem(menus.MENU, JSON.stringify(data))
    },
    clearUserInfo (state) {
      state.userInfo = null
      localStorage.removeItem(keys.USER)
    },
    clearMenuInfo (state) {
      state.menuInfo = null
      localStorage.removeItem(menus.MENU)
    },
    updateLoadingState (state, flag) {
      state.isLoading = flag
    },
    setpageTitle (state, data) {
      state.pagetitle = data
      localStorage.setItem(menus.PAPGETITLE, JSON.stringify(data))
    }
  },
  getters: {
    getUserInfo: (state) => () => {
      getUserInfo(state)
      return state.userInfo
    },
    getUserName: (state) => () => {
      getUserInfo(state)
      if (state.userInfo) {
        return state.userInfo.userName
      }
      return 'アクセス情報は取得できませんでした。'
    },
    getToken: (state) => () => {
      getUserInfo(state)
      if (state.userInfo) {
        return 'Bearer ' + state.userInfo.token
      }
      return ''
    },
    isLogin: (state) => () => {
      if (getUserInfo(state)) {
        return true
      }
      return false
    },
    getMenuInfo: (state) => () => {
      getMenuInfo(state)
      return state.menuInfo
    },
    isLoading: (state) => () => {
      return state.isLoading
    },
    getPageTitle: (state) => () => {
      getPageTitle(state)
      if (state.userInfo) {
        return state.pagetitle
      }
    }
  },
  actions: {
    toDo (context) {
      return context.Store.m
    },
    onLoading (context, flag) {
      context.commit('updateLoadingState', flag)
    }
  }
}
const store = createStore({
  modules: {
    system,
    data
  }
})
export default store
