
/*

 SLIDE IN THE ELEMENT, from the right

 [experimental]

*/


import Vue from 'vue';

Vue.directive('slide-from-right', {

  //first lets push the element to the right byr the desirable amount
  bind(el, binding){

    el.style.opacity = 0;
    el.style.transition = "all .3s ease";
    el.style.transform = "translateX(" + binding.value + ")";

  },

  // ENTRY
  inserted(el) {

    setTimeout(function(){

      el.style.opacity = 1;
      el.style.transform = "translateX(0)";

    },200);

  },


  // LEAVE
  unbind(el, binding) {

    el.style.opacity = 1;
    el.style.transform = "translateX(" + binding.value + ")";

  }


});