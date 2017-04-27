<template lang="html">

  <div class="expand-details">

      <div class="details">

          <div>

              <slot></slot>

          </div>

      </div>


      <div class="button"
           tabindex="1"
           @touchstart="onTouchStart($event)"
           @touchend="onTouchEnd($event)"
           @blur="onBlur($event)">

          <span><img src="media/icons/plus.png"></span>

      </div>

  </div>


</template>

<script lang="js" type="text/javascript">

    import {TweenMax, Quad, Bounce} from "gsap";

    export default  {

        name: 'expand-details',

        props: ['size'],

        data() {
          return {

          }
        },

        methods: {

            // will trigger when the user clicks outside the component, tabindex required
            onBlur(e){

                let details = e.target.previousElementSibling;

                details.classList.remove('reveal');

                details.style.paddingBottom = 0;

            },


            onTouchEnd(e){

                // WHEN TOUCH ENDS LETS SCALE IT UP AGAIN

                e.target.classList.remove('touching')

                TweenMax.to( e.target, 0.6, {scale:1, boxShadow: '0 10px 10px 0 rgba(0,51,141,0.4)', ease: Bounce.easeOut });


                //REVEAL EFFECT

                let details = e.target.previousElementSibling;



                if(details.classList.contains('reveal')){

                    details.classList.remove('reveal');

                    details.style.paddingBottom = 0;


                }else{

                    details.classList.add('reveal');

                    details.style.paddingBottom = this.size;

                }

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

    .expand-details {

        position: relative;
        transform-origin: 25px 25px;

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

            outline: none !important;


            span{
                transition: all .3s ease-in;
                transform-origin: 57% 40%;
                width: 20px;
                height: 20px;
                img{
                    width: 20px;
                    height: 20px;
                }
            }


            &.touching {

                box-shadow: 0 3px 3px 0 rgba(0, 51, 141, 0.4);

                &:before, &:after {
                    transform: scale(0);
                }

            }

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

        .details{

            position: relative;
            padding: 0 0 0 70px;
            margin-left: 26px;
            border-left: 1px solid #fff;
            overflow: hidden;
            height: 0;

            transition: all .3s ease-in .3s; // vertical line out animation, wait .3s

            p{
                float: left;
                width: 100%;
                margin-top: 16px;
                color: #686A6E;
                text-align: left;
                font-size: 19px;
                font-weight: 300;
                line-height: 28px;
            }

            //horizontal line
            &:before{
                content: '';
                width: 0;
                height: 1px;
                background: #fff;
                position: absolute;
                top: 0;
                left: 0;
                transition: all .2s ease;
            }

            &.reveal{

                transition: all .3s ease-in; // vertical line in animation

                &:before{
                    width: 50px;
                    transition: all .3s ease-in .5s; // horizontal line in animation, wait .5s
                }


                div{
                    transition: all .3s ease .5s; // fade in animation, wait .5s
                    opacity: 1;
                }


                //Turn the + into x
                + .button{
                    span{
                        transform: rotate(45deg) translate(2px);
                    }
                }
            }

            //content to reveal
            div{
                transition: all .2s ease; // fade out animation
                opacity: 0;
            }

        }
    }

</style>
