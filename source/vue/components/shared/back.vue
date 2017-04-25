<template lang="html">

  <div id="back">

    <span class="button-label">BACK</span>

    <div class="button"  v-pop-in="800" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)">

      <img src="media/icons/arrow.svg" />

    </div>

  </div>

</template>

<script lang="js" type="text/javascript">

  import {TweenMax, Quad, Bounce} from "gsap";

  export default  {

    name: 'back',

    methods: {

      onTouchEnd(e){

        this.$router.go(-1);

        TweenMax.to( e.target, 0.6, {scale:1, opacity: 1, ease: Quad.easeOut });

      },


      onTouchStart(e){

        TweenMax.to( e.target, 0.6, {scale:0.5, opacity: 1, ease: Quad.easeOut });

      }

    }

  }
</script>

<style scoped lang="scss">

  #back{


    position: absolute;
    top: 56px;
    left: 38px;
    z-index: 9999;


    .button-label {

      position: absolute;
      top: 50%;
      right: -15px;
      transform: translate(100%,-50%);

      float: left;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;

      opacity: 0;

      animation: fadeIn 0.5s ease-in forwards;
      animation-delay: 1s;

    }

    .button{

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
        transform: rotate(-180deg);
      }


      transform: scale(0.5);

      &:hover{
        box-shadow: 0 3px 3px 0 rgba(0, 51, 141, 0.4);
      }


    }


  }

</style>
