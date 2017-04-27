import buttonRadar from '../shared/button-radar.vue'
import expandDetails from '../shared/expand-details.vue'
import back from '../shared/back.vue'

export default  {

  name: 'features',

  components: {

    expandDetails,
    buttonRadar,
    back

  },


  data() {
    return {

      features: this.$store.state.features

    }
  },

  mounted(){

    let item03 = document.querySelector('.item03')[0];
    item03.classList.add('reverse');

  }

}

