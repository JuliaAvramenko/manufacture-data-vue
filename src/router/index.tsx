// import HomePage from '@/HomePage.vue';
// import ResultPage from '@/ResultPage.vue';
// import HomePage from '../pages/HomePage.vue';
// import ResultPage from '../pages/ResultPage.vue';
import HomePage from '@/pages/HomePage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import { useFormStore } from '@/stores/form';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/results',
        name: 'Result',
        component: ResultPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if (from.path === '/results') {
        const formStore = useFormStore();
        formStore.resetFormData();
    }
    next();
});

export default router;