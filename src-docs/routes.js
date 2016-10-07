import VueRouter from 'vue-router';

export const routes = [
  { path: '/', name: 'home', meta: { label: 'Home', exact: true }, component: require('./Home.vue') },
  { path: '/button', name: 'button', meta: { label: 'Button' }, component: require('./docs/DocsButton.vue') },
  { path: '/icon-button', name: 'icon-button', meta: { label: 'IconButton' }, component: require('./docs/DocsIconButton.vue') },
  { path: '/text-input', name: 'text-input', meta: { label: 'TextInput' }, component: require('./docs/DocsTextInput.vue') },
  { path: '/ripple', name: 'ripple', meta: { label: 'Ripple' }, component: require('./docs/DocsRipple.vue') },
  { path: '/carousel', name: 'carousel', meta: { label: 'Carousel' }, component: require('./docs/DocsCarousel.vue') },
];

export const router = new VueRouter({
  mode: 'history',
  routes: [
    ...routes,
    { path: '*', redirect: '/' },
  ],
});

export default routes;