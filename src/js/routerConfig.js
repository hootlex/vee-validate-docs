/* eslint-disable max-len */
const view = (name) => () => System.import(`./views/${name}.vue`);

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
        { path: '/', name: 'home', component: view('Home'), meta: { subtitle: 'Simple Vue.js Form Validation', scrollToTop: true } },
        { path: '/api', name: 'api', component: view('Api'), meta: { subtitle: 'Classes API', scrollToTop: true } },
        { path: '/examples', name: 'examples', component: view('Examples'), meta: { subtitle: 'Usage and Examples', scrollToTop: true } },
        { path: '/rules', name: 'rules', component: view('Rules'), meta: { subtitle: 'Validation Rules', scrollToTop: true } },
        { path: '/localization', name: 'localization', component: view('Localization'), meta: { subtitle: 'Language Support', scrollToTop: true } },

        { path: '/:page.html', redirect: '/:page' }, // handles .html references.
        { path: '*', redirect: '/' }
    ]
};
