import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

//change document title when route changes
const DEFAULT_TITLE = "African Crafts and Jewellery";
router.afterEach((to) => {
    //wait until DOM updates are finished to change title
    nextTick(() => {
        const newTitle = to.name + " | " + DEFAULT_TITLE;
        document.title = newTitle || DEFAULT_TITLE;
    });
});

createApp(App)
    .use(router)
    .mount('#app');
