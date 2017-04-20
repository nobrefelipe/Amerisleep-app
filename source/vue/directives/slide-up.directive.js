
/*
  SLIDE  UP THE ELEMENT
*/

import Vue from 'vue';
import {TweenMax, Cubic, Bounce} from "gsap";

Vue.directive('slide-up', {

  //Lets push the elemtn down initially
  bind(el){

   el.style.opacity = 0;
   el.style.marginTop = '30px';

  },

  // ENTRY
  inserted(el, binding) {

    //lets wait for the desirable delay before show the component
    setTimeout( ()=> {

      //animate it up
      TweenMax.to(el, 1, {
        y:-30,
        opacity: 1,
        ease: Cubic.easeOut
      });

    }, binding.value)

  },


  // LEAVE
  unbind(el) {

    //animate it down
    TweenMax.to(el, 1, {
      y: 0,
      opacity: 0,
      ease: Cubic.easeOut
    });

  }


});