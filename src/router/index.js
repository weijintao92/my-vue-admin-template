import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/index'),
      meta: { title: 'Index', icon: 'home' }
    }]
  },

  {
    path: '/otherPlugin',
    component: Layout,
    name: 'OtherPlugin',
    redirect: '/otherPlugin/',
    meta: { title: '第三方插件', icon: 'Login' },
    children: [{
      path: 'clipboard',
      name: 'Clipboard',
      component: () => import('@/views/otherPlugin/clipboard/clipboard'), // Parent router-view
      meta: { title: 'Clipboard' }
    }, {
      path: 'test',
      name: 'Test',
      component: () => import('@/views/otherPlugin/test/test'), // Parent router-view
      meta: { title: 'Test' }
    }]
  },

  {
    path: '/login',
    component: Layout,
    name: 'LoginHome',
    // redirect: '/loginHome/login',
    meta: { title: 'LoginHome', icon: 'Login' },
    children: [{
      path: '/particles',
      name: 'Particles',
      component: () => import('@/views/loginHome/particles/index'), // Parent router-view
      meta: { title: 'particles' },
      children: [{
        path: '/show',
        name: 'Show',
        component: () => import('@/views/loginHome/particles/show/index'),
        meta: { title: 'Show' }
      }, {
        path: '/code',
        name: 'Code',
        component: () => import('@/views/loginHome/particles/code/index'),
        meta: { title: 'Code' }
      }]
    }, {
      path: '/githubLogin',
      name: 'GithubLogin',
      component: () => import('@/views/loginHome/gitHubLogin/index'), // Parent router-view
      meta: { title: 'GithubLogin' }
    }, {
      path: '/verifyCode',
      name: 'VerifyCode',
      component: () => import('@/views/loginHome/verifyCode/index'), // Parent router-view
      meta: { title: 'VerifyCode' }
    }]
  },

  {
    path: '/my_Vuex',
    component: Layout,
    children: [
      {
        path: 'my_Vuex',
        name: 'My_Vuex',
        component: () => import('@/views/my_Vuex/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
