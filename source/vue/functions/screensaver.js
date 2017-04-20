
export default function showScreensaver(vue){

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
            vue.$router.push({ path: '/' });

        }, 5000); // 5 secs

    });


}