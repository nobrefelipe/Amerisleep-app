/*  DEPENDENCIES  */
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import store from './store';


/*  COMPONENTS */
import screensaver from './components/screensaver/index.vue';
import discover from './components/discover/index.vue';
import features from './components/features/index.vue';
import remoteControl from './components/remote-control/index.vue';


/* DIRECTIVES */
import slideIn from './directives/slide-in.directive';
import slideUp from './directives/slide-up.directive';
import popIn from './directives/pop-in.directive';
import slideFromRight from './directives/slide-from-right.directive';


/* USE */
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);



const routes = [
  { path: '/', name:'screensaver', component:  screensaver },
  { path: '/discover', name:'discover',  component: discover },
  { path: '/remote-control', name:'remote-control',  component: remoteControl },
  { path: '/features', name:'features',  component: features }
];

export const router = new VueRouter({

 // mode: 'history',  use hash navigation so we don't need a webserver running
  routes

});




/*  INIT  */
const app = new Vue({

  router,

  store,

  directives: {

    slideIn,

    slideUp,

    popIn,

    slideFromRight,

  }

}).$mount('#app');
