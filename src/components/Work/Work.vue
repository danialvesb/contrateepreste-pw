<template>
  <div >
      <b-card class="mb-2 mt-2 box-shadow">
          <b-card-header header-bg-variant="dark" header-text-variant="white">
              <b>{{ work.category_title }}</b>
          </b-card-header>
          <b-card-body class="card-body">
              <b-card-img style="border-radius: 10px" src="https://picsum.photos/400/400/?image=20"></b-card-img>
              <b-card-text>  {{ work.title }} </b-card-text>

              <small>{{ work.description }}</small>
              <div class="d-flex justify-content-between align-items-center">

              </div>
          </b-card-body>
          <b-card-footer footer-bg-variant="dark">
              <div class="btn-group">
                  <b-button variant="light">Visualizar</b-button>
                  <b-button variant="light">Editar</b-button>

              </div>

          </b-card-footer>
      </b-card>
  </div>




</template>

<script>
import { mapActions } from 'vuex'

// import WorkCreate from "../Form/WorkCreate";
import { BCard, BCardText, BButton, BCardBody, BCardImg, BCardFooter, BCardHeader} from 'bootstrap-vue'




export default {
    name: 'work',
    components: {
        'b-card': BCard,
        'b-card-text': BCardText,
        'b-button': BButton,
        'b-card-body': BCardBody,
        'b-card-img': BCardImg,
        'b-card-footer': BCardFooter,
        'b-card-header': BCardHeader
        // WorkCreate,
    },
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            modalShow: false
        }
    },
    methods: {
        ...mapActions(['removeWork']),
        deleteWork() {
            this.removeWork(this.work.id)
        }
    },
    computed: {
        

    }
}
</script>

<style scoped>

</style>