/*
 * @Author: 616749285@qq.com
 * @Date: 2021-01-20 14:38:44
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-01-20 15:06:10
 * @Description:  路由配置
 */

import Home from '@/views/home/Index'

export const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login.vue')
  }
]
