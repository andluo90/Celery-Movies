import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Top from '@/components/Top'
import Hot from '@/components/Hot'
import Search from '@/components/Search'
import Like from '@/components/Like'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/like',
      name: 'Like',
      component: Like
    }
  ]
})
