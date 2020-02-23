<template>
  <b-container fluid>
      <b-row class="m-3 p-0">
          <b-col class="m-0 p-0">
              <b-card :title="work.title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Card image" img-left class="card">
                  <b-card-text>
                      {{ work.description }}
                  </b-card-text>
                  <template v-slot:footer class="category">
                      <small class="text-muted">{{ work.category_title }}</small>
                  </template>
              </b-card>
          </b-col>
      </b-row>

  </b-container>




</template>

<script>
import { mapActions } from 'vuex'

// import WorkCreate from "../Form/WorkCreate";
import { BCard, BCardText} from 'bootstrap-vue'




export default {
    name: 'work',
    components: {
        'b-card': BCard,
        'b-card-text': BCardText,
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
    .card {
        cursor: pointer;
    }
    .category:hover {
        background-color: blue;
    }
</style>