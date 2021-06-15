import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./components/containers/dashboard/index').default
        },
        {
            path: '/order',
            component: require('./components/containers/order/index').default
        },
        {
            path: '/customer',
            component: require('./components/containers/customer/index').default
        },
        {
            path: '/category',
            component: require('./components/containers/category/index').default
        },
        {
            path: '/product',
            component: require('./components/containers/product/index').default
        },
        {
            path: '/user',
            component: require('./components/containers/user/index').default
        },
        {
            path: '/role',
            component: require('./components/containers/role/index').default
        },
        {
            path: '/permit',
            component: require('./components/containers/permit/index').default
        },
        {
            path: '/report',
            component: require('./components/containers/report/index').default
        }
    ],
    mode: 'history'
});

export default routes;
