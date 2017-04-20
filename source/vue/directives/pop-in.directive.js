
/*
 SCALE UP THE ELEMENT
*/


import Vue from 'vue';
import {TweenMax, Cubic, Bounce} from "gsap";

Vue.directive('pop-in', {

  //since we are scaling in UP, lets scale it dow first
  bind(el){

   el.classList.add('scaleDown');

  },

  // ENTRY
  inserted(el, binding) {

    //lets wait for the desireble delay before show the component
    setTimeout(function () {

      TweenMax.to(el, 1, {scale: 1, opacity: 1 , ease: Cubic.easeOut});

    }, binding.value)

  },


  // LEAVE
  unbind(el) {

    TweenMax.to(el, 1, {scale: 1.3, opacity: 0 , ease: Cubic.easeOut});

  }


});