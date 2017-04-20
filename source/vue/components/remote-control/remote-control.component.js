
import back from '../shared/back.vue'

export default  {
  name: 'remote-control',

  components: {

    back

  },

  data() {
    return {

      remoteFeatures: this.$store.state.remoteFeatures

    }
  }

}

