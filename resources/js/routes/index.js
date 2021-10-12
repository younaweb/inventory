import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Home from '../pages/Home.vue'

import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({


    mode: "history",
    routes: [
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
        }
    ]
})
export default router;
