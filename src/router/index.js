import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../components/Categories.vue'
import Messages from '../components/Messages.vue'
import Recherche from '../components/Recherche.vue'
import CategorieMessages from '../components/CategorieMessages.vue'
import NouvelleCategorie from '../components/NouvelleCategorie.vue'
import Login from "../components/Login";
import Logout from "../components/Logout";
import NouveauMessage from '../components/NouveauMessage.vue'
import UpdateCategorie from '../components/UpdateCategorie.vue'
import UpdateMessage from '../components/UpdateMessage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: { guest: true },
  },
  {
    path: '/nouvelle-categorie',
    name: 'nouvelle-categorie',
    component: NouvelleCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      }
    ]
  },
  {
    path: '/nouveau-message',
    name: 'nouveau-message',
    component: NouveauMessage
  },
  {
    path: '/update-categorie/:id',
    name: 'update-categorie',
    component: UpdateCategorie
  },
  {
    path: '/update-message/:id',
    name: 'update-message',
    component: UpdateMessage
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
