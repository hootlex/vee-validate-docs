/* eslint-disable max-len */
const Api = () => System.import('./pages/Api.vue');
const Examples = () => System.import('./pages/Examples.vue');
const Home = () => System.import('./pages/Home.vue');
const Rules = () => System.import('./pages/Rules.vue');
const Localization = () => System.import('./pages/Localization.vue');

const scrollBehavior = (to, from, savedPosition) => {
    const position = {};
    if (to.hash) {
        position.selector = to.hash;
    } else if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
    } else if (savedPosition) {
        return savedPosition;
    }

    return position;
};

export default {
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [
        { path: '/', name: 'home', component: Home, meta: { subtitle: 'Simple Vue.js Form Validation', scrollToTop: true } },
        { path: 'api', name: 'api', component: Api, meta: { subtitle: 'Classes API', scrollToTop: true } },
        { path: 'examples', name: 'examples', component: Examples, meta: { subtitle: 'Usage and Examples', scrollToTop: true } },
        { path: 'rules', name: 'rules', component: Rules, meta: { subtitle: 'Validation Rules', scrollToTop: true } },
        { path: 'localization', name: 'localization', component: Localization, meta: { subtitle: 'Language Support', scrollToTop: true } },


        { path: '*', redirect: '/' }
    ]
};
