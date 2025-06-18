import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/stop'
  },
  {
    path: '/stop',
    name: 'stop',
    component: HomeView,
    meta: {// 自定义元信息
      requiresAuth: true,// 登录验证
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // 懒加载
    component: () => import('@/views/LoginView.vue'),
    children: [
      {
        path: "/userAgreement",
        name: 'userAgreement',
        component: () => import('@/views/UserAgreement.vue')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/xiaomicar',
    name: 'xiaomicar',
    component: () => import('@/views/XiaoMiCarView.vue')
  },
  {
    path: '/xiaomiguanwang',
    name: 'xiaomiguanwang',
    component: () => import('@/views/GuanWangView.vue')
  },
  {
    path: '/DetailMain:id',
    name: 'DetailMain',
    component: () => import('@/views/DetailMain.vue'),
    props: true,// 是否接收参数
  },
  {
    path: '/StopMain:id',
    name: 'StopMain',
    component: () => import('@/views/StopMain.vue'),
    props: true,// 是否接收参数
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,// 部署到服务器上时,需要指定base
  routes
})



// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.token) {
      next();
    } else { // 没有token就跳转到login页面
      next({
        name: 'login',
      })
    }
  } else {// 不需要拦截直接放行
    next();
  }
})
export default router;
