import { createRouter, createWebHashHistory } from "vue-router"
import Index from "../views/Index.vue"
const routes = [
    { path: '/', redirect: "/Index" },
    {
        path: '/Index', component: Index,
        children: [{
            path: '', component: () => import('../views/indexContent/Home.vue')
        },
        {
            path: '/Home', component: () => import('../views/indexContent/Home.vue')
        },
        {
            path: '/Software', component: () => import('../views/indexContent/Software.vue')
        }, {
            path: '/Chat', component: () => import('../views/indexContent/Chat.vue')
        }, {
            path: '/Todo', component: () => import('../views/indexContent/Todo.vue')
        },]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router