import Vue from 'vue'
import Router from 'vue-router'
import LastMovie from './views/LastMovie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'LastMovie',
      component: LastMovie
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: () => import('./views/Movie.vue')
    },
    {
      path: '/search/:search',
      name: 'SearchMovie',
      props: true,
      component: () => import('./views/SearchMovie.vue')
    }
  ]
})