import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// import { VueRouter } from 'vue-router';

// const Home = { template: '<div>Home</div>' };
// const About = { template: '<div>About</div>' };

// const routes = [
//     { path: '/about', component: About },
// ];

// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// });

createApp(App)
    // .use(router)
    .mount('#app');
