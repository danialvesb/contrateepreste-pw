<template>
  <div s>
      <b-card class="mb-2 mt-2 box-shadow" style="max-width: 540px; min-width: 300px;">
          <b-card-header header-bg-variant="dark" header-text-variant="white" class=" p-1">
              <small>{{ work.category_title }}</small>
          </b-card-header>

          <b-card-body class="card-body p-1" style=" cursor: pointer;">
              <div style="min-height: 200px; max-height: 300px; min-width: 200px; max-width: 300px; background: gray" >
                <a :href="urlView" style="text-decoration: none">
                  <b-card-img style="border-radius: 10px;" src="https://picsum.photos/400/400/?image=20"></b-card-img>
                </a>
              </div>
              <hr>

              <b-card-text>
                  <b>{{ work.title }}</b>
              </b-card-text>
          </b-card-body>

          <b-card-footer footer-bg-variant="dark" class=" p-1">
              <div class="btn-group">
                  <b-button variant="light" :to="urlEdit">Editar</b-button>
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
            modalShow: false,
            urlEdit: "/servicos/editar/"+this.work.id,
            urlView: "/servicos/visualizar/"+this.work.id,
        }
    },
    methods: {
        ...mapActions(['removeWork']),
        deleteWork() {
            this.removeWork(this.work.id)
        },
        clickView() {
            alert('Clicou no corpo')
        },
        clickEdit() {
            alert('Clicou em editar')
        }
    },
    computed: {
        

    }
}
</script>

<style scoped>

</style>