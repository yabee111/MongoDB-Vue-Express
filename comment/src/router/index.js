import Vue from 'vue'
import Router from 'vue-router'
import commentList from '@/components/commentList'
import commentDetails from '@/components/commentDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commentList',
      component: commentList
    },
    {
      path: '/commentDetails/:_id',
      name: 'commentDetails',
      component: commentDetails
    }
  ]
})
