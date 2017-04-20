
/*
 SLIDE  IN THE ELEMENT, from the left
*/


import Vue from 'vue';
//import {TweenMax, Cubic} from "gsap";

Vue.directive('slide-in', {


  // ENTRY
  inserted(el) {

    el.classList.add('slideIn');
    // TweenMax.to( el, 0.6, {x:0, ease: Cubic.easeOut }); //commented out as animating with TweenMax was causing lag on resourceless machines

  },


  // LEAVE
  unbind(el, binding) {

    el.classList.remove('slideIn');
    // TweenMax.to( el, 0.3, {x:-1200, ease: Cubic.easeIn }); //commented out as animating with TweenMax was causing lag on resourceless machines

  }


});