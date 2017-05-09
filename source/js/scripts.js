
/* back to screensaver if inactive */
function showScreensaver(){

    // the timeout
    var mousetimeout;

    // always clean the timeout as soon as the user touch the screen
    document.addEventListener("touchstart", function(e){

        clearTimeout(mousetimeout);

    });


    // set the timeout as soon as the user finishes touching the screen
    document.addEventListener("touchend", function(){

        mousetimeout = setTimeout(function(){


            // redirect to home
            window.location = '#/'


        }, 150000); // 150 secs

    });

}


showScreensaver();
