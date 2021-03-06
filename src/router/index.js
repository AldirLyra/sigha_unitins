import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/newlogin',
  //   name: 'Newlogin',
  //   component: () => import('../views/NewLogin.vue')
  // },
  {
    path: '/semestre',
    name: 'Semestre',
    component: () => import('../views/Semestre.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/salas',
    name: 'Salas',
    component: () => import('../views/Salas.vue')
  },
  {
    path: '/curso',
    name: 'Curso',
    component: () => import('../views/Curso.vue')
  },
  {
    path: '/campus',
    name: 'Campus',
    component: () => import('../views/Campus.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Usuarios.vue')
  },
  {
    path: '/bloco',
    name: 'Bloco',
    component: () => import('../views/Bloco.vue')
  },

  {
    path: '/oferta',
    name: 'Oferta',
    component: () => import('../views/Oferta.vue')
  },
  {
    path: '/relatorio',
    name: 'Relatorio_Salas',
    component: () => import('../views/Relatorio_Salas.vue')
  },
  {
    path: '/relatoriohorarios',
    name: 'Relatorio_Horarios',
    component: () => import('../views/Relatorio_Horarios.vue')
  },
  {
    path: '/relatoriolabins',
    name: 'Relatorio_Labins',
    component: () => import('../views/Relatorio_Labins.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (
//     to.name !== "login" &&
//     to.name !== "register" &&
//     !localStorage.getItem("authUser")
//   ) {
//     next({ name: "login" });
//   } else {
//     next();
//   }

//   setTimeout(function () {
//   window.location.reload();
//   }, 5000);


// });

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/semestres', ]
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')
//   if (authRequired && !loggedIn) {
//     return next('/semestres')

//   }
//   next()

//   // setTimeout(function(){
//   //   window.location.reload();
//   // }, 1000);

// })

export default router
