import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/mains/main'
import Content from '@/components/content/contentpage'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
