import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'
// import http from '@/api/http'

import redirect from '../redirect'

const routes = [
  // Reafs-W機能
  {
    path: '/',
    name: 'Index_W',
    component: () => import('@/views/IndexW.vue'), // W用のINDEXを利用する
    redirect: '/Reafs_W/home',
    children: [
      ...redirect,
      {
        path: '/Reafs_W/home',
        name: 'WD00010',
        component: () => import('@/views/Reafs-W/common/WD00010/Top.vue')
      }
    ]
  },
  // Reafs-W機能ログイン
  {
    path: '/Reafs_W/login',
    name: 'WD00000',
    component: () => import('@/views/Reafs-W/common/WD00000/Login.vue'),
    meta: {
      anonymous: true
    }
  },
  //* 404は最後
  {
    path: '/:pathMatch(.*)*',
    name: '404ERROR',
    component: () => import('@/views/redirect/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  store.getters.getUserInfo()

  if (to.matched.length === 0) return next({ path: '/404' })
  store.dispatch('onLoading', true)

  // // 画面名設定
  // await http
  //   .post('/api/Menu/getAllMenu', { user: 'info' })
  //   .then(function (result) {
  //     store.commit('setMenuInfo', result.data)
  //     let { 0: menuInfo } = result.data.filter((r) => {
  //       return r.SubMenuId == to.name
  //     })

  //     if (menuInfo) {
  //       store.commit('setpageTitle', menuInfo.SubMenuName)
  //     } else {
  //       store.commit('setpageTitle', '')
  //     }
  //   })
  return next()
  // if ((to.hasOwnProperty('meta') && to.meta.anonymous) || store.getters.isLogin()) {    
  //   return next()
  // }
  // if (to.matched[0].path === '/Reafs_W') {
  //   next({ name: 'WD00000', query: { redirect: Math.random() } })
  // } else {
  //   next({ path: '/Reafs_W/login', query: { redirect: to.path, guid: to.query.guid } })
  // }
})


router.afterEach((to, from) => {
  store.dispatch('onLoading', false)  
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    window.location.replace(window.location.href)
  }
})

export default router
