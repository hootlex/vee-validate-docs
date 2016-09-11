/* eslint-disable max-len */
const Api = () => System.import('./pages/Api.vue');
const Examples = () => System.import('./pages/Examples.vue');
const Home = () => System.import('./pages/Home.vue');
const Rules = () => System.import('./pages/Rules.vue');
const Localization = () => System.import('./pages/Localization.vue');

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }

    const position = {};
    if (to.hash) {
        position.selector = to.hash;
    }

    if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
    }

    return position;
};

export default {
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [
        { path: '/', name: 'home', component: Home, meta: { subtitle: 'Simple Vue.js Form Validation' } },
        { path: '/api', name: 'api', component: Api, meta: { subtitle: 'Classes API' } },
        { path: '/examples', name: 'examples', component: Examples, meta: { subtitle: 'Usage and Examples' } },
        { path: '/rules', name: 'rules', component: Rules, meta: { subtitle: 'Validation Rules' } },
        { path: '/localization', name: 'localization', component: Localization, meta: { subtitle: 'Language Support' } },


        { path: '*', redirect: '/' }
    ]
};
