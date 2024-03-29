/*
 * @Author: BGG
 * @Date: 2021-01-20 14:38:44
 * @LastEditors: BGG
 * @LastEditTime: 2021-01-20 17:55:27
 * @Description:  路由配置
 */

import Home from '@/views/home/Index'

export const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/Index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login')
  }
]
