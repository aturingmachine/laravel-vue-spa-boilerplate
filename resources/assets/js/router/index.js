import Vue from 'vue'
import Router from 'vue-router'

//this is where we import the components
import homePage from '../components/homePage.vue'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/*',
      redirect: '/home'
    }
    //any more routes you need should follow the previous format
  ]
})

export default router