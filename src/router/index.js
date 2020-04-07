//路由配置
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',//全局设置 router-link 激活样式 激活的类名
  routes: [
    {
      name: 'heroes',
      path: '/heroes',
      component: () => import('../components/list/hero/HeroList.vue')
    },
    {
      name: 'bar',
      path: '/bar',
      component: () => import('../components/list/bar/BarList.vue')
    },
    {
      name: 'foo',
      path: '/foo',
      component: () => import('../components/list/foo/FooList.vue')
    },
    {
      name: 'addHero',
      path: '/addHero',
      component: () => import('../components/list/hero/AddHero.vue')
    },
    {
      name: 'editHero',
      path: '/editHero/:id',
      component: () => import('../components/list/hero/EditHero.vue')
    }
  ]
})
