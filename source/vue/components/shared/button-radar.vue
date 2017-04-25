<template lang="html">

  <div class="discover">

      <span class="button-label">{{ label }}</span>

      <div class="button"
           @touchstart="onTouchStart($event)"
           @touchend="onTouchEnd($event)">

          <img src="media/icons/arrow.svg" />

      </div>

  </div>


</template>

<script lang="js" type="text/javascript">

    import {TweenMax, Quad, Bounce} from "gsap";

    export default  {

        name: 'button-radar',

        props: ['to', 'label'],

        methods: {

            onTouchEnd(e){

                // WHEN TOUCH ENDS LETS SCALE IT UP AGAIN

                e.target.classList.remove('touching');

                TweenMax.to( e.target, 0.6, {scale:1, boxShadow: '0 10px 10px 0 rgba(0,51,141,0.4)', ease: Bounce.easeOut });

                // AND NAVIGATE TO THE DESIRABLE ROUTE
                this.$router.push(this.to);

                // SOME ANIMATION ON THE BUTTON LABEL
                document.querySelector(".button-label").classList.add('fadeout');

            },


            onTouchStart(e){

                //WHEN TOUCHING LETS SCALE IT DOWN, [press effect]

                e.target.classList.add('touching');

                TweenMax.to( e.target, 0.6, {scale:0.4, boxShadow: '0 1px 1px 0 rgba(0,51,141,0.4)', ease: Quad.easeOut });

            }

        }

    }
</script>

<style scoped lang="scss">

    .discover {
        position: relative;

        // THE LABEL ON THE BUTTON
        .button-label {
            position: absolute;
            top: 50%;
            left: -15px;
            transform: translate(-100%,-50%);

            min-width: 240px;
            text-align: right;

            float: left;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 18px;

            transition: all .5s ease-out;

            opacity: 0;

            animation: fadeIn 0.5s ease-in forwards;
            animation-delay: 1s;

            &.fadeout{
                opacity: 0.2;
                letter-spacing: 18px;
                font-size: 30px;
            }
        }

        .button {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 54px;
            height: 54px;

            border-radius: 50%;
            background: #fff;
            box-shadow: 0 10px 10px -4px rgba(0, 51, 141, 0.2);

            img {
                width: 15px;
                height: 15px;
            }

            //WHEN TOUCHING LETS SCALE IT DOWN, [press effect]
            &.touching {

                box-shadow: 0 3px 3px 0 rgba(0, 51, 141, 0.4);

                &:before, &:after {
                    transform: scale(0);
                }

            }


            // RADAR WAVES
            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 1px solid #fff;

                transition: all .3s ease-in;
                transform-origin: center;

            }

            &:before {
                animation: radar 1.7s ease-in infinite;
            }

            &:after {
                animation: radar 1.7s ease-in infinite;
                animation-delay: 0.8s;
            }

        }
    }

</style>
