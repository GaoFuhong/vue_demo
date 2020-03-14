import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Messages from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about', // path左侧的 / 代表根路径
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          path: 'messages',
          component: Messages,
          children: [
            {
              path: '/home/messages/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
