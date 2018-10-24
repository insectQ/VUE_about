import Vue from 'vue'
import Router from 'vue-router'
import todoListDefault from '@/components/todoListDefault'
import todoListUncomplete from '@/components/todoListUncomplete'
import todoListcomplete from '@/components/todoListcomplete'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoListDefault',
      component: todoListDefault
    },
    {
      path: '/todoListUncomplete',
      name: 'todoListUncomplete',
      component: todoListUncomplete
    },
    {
      path: '/todoListcomplete',
      name: 'todoListcomplete',
      component: todoListcomplete
    }
  ]
})
