import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = new VueRouter({
    routes: [
        {
            path: "/",
            component: require("./components/layouts/ContentComponent").default
        },
    ]
})

export default routes;
