import buttonRadar from '../shared/button-radar.vue'
import back from '../shared/back.vue'
import {TweenMax, Cubic} from "gsap";

export default  {

    name: 'discover',

    components: {

        buttonRadar,
        back

    },

    data(){

        return{

            sizes: this.$store.state.sizes,
            selectedItem: this.$store.state.sizes[0],
            price: this.$store.state.sizes[0].price

        }

    },

    //lets watch for a new select and animate the price
    watch: {
        selectedItem: function() {

            var vm = this;

            var animationFrame;

            var newPrice = vm.selectedItem.price;

            var oldPrice = vm.price;

            function animate (time) {

                TWEEN.update(time);

                animationFrame = requestAnimationFrame(animate);

            }

            new TWEEN.Tween({ tweeningNumber: oldPrice })

                .easing(TWEEN.Easing.Quadratic.Out)

                .to({ tweeningNumber: newPrice }, 1000)

                .onUpdate(function () {

                    vm.price = this.tweeningNumber.toFixed(0)

                })

                .onComplete(function () {

                    cancelAnimationFrame(animationFrame)

                })

                .start();

            animationFrame = requestAnimationFrame(animate);

        }
    },

    methods:{

        onClick(el){

            el.target.closest(".dropdown").classList.toggle('opened');

        },

        onSelect(i){

            this.selectedItem = this.$store.state.sizes[i]

        }

    }

}

