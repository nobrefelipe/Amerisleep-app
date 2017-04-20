/* Zoom in/out */

// import dynamics from 'dynamics.js';

import {TweenMax, Cubic} from "gsap";

export default function zoomIn(vue){

    let view = vue.$route.name;
    let screensaver = document.getElementById("screensaver");



    //if not on the screensaver view, zoom in
    if(view != 'screensaver'){

        screensaver.classList.add('stop-loop');
        TweenMax.to(screensaver, 0.7, {
            // webkitFilter:"blur(5px)",
            scale:1.2,
            boxShadow:"0 0 0 2000px rgba(158,195,222, 0.3) inset",
            ease: Cubic.ease});

    }else{

        screensaver.classList.remove('stop-loop');
        TweenMax.to(screensaver, 1.4, {
            // webkitFilter:"blur(0px)",
            scale: 1,
            boxShadow:"0 0 0 2000px rgba(40,100,139, 0) inset",
            ease: Cubic.easeOut});

    }

}