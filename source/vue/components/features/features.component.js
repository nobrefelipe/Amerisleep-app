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
  }

}

