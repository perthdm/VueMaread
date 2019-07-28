import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';
import routes from './routes';
import IonicVue from '@ionic/vue';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import 'semantic-ui-css/semantic.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// import { dom } from '@fortawesome/fontawesome-svg-core';
// import { faUserSecret, faStar, faTrashRestoreAlt, faCamera, faBook } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


Vue.config.productionTip = false;

Vue.use(IonicVue);
Vue.use(VueRouter);
Vue.use(SuiVue);
Vue.config.productionTip = false;


const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.Auth)) {
        if (localStorage.getItem('uid') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() 
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');