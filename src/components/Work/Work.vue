<template>
  <b-container class="container">
<!--      <b-row cols="12">-->

<!--      </b-row>-->
<!--        <header class="header-card">-->
<!--            <div class="category_title">-->
<!--                {{ work.category_title }}-->
<!--            </div>-->
<!--            <div class="text-header-card">-->
<!--                {{ work.title }}-->
<!--            </div>-->

<!--        </header>-->
<!--        <hr>-->

<!--        <main class="content-card">-->
<!--&lt;!&ndash;            <div class="text-content-card">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ work.description }}&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <div class="image-content-card" href="fff">-->

<!--            </div>-->
<!--        </main>-->
<!--        <footer class="footer-card">-->
<!--            <div class="buttons-footer-card">-->
<!--                <button class="btn-edit" href="#" @click="modalShow = !modalShow">Editar</button>-->
<!--            </div>-->
<!--        </footer>-->
<!--&lt;!&ndash;    <b-modal v-model="modalShow" id="modal-1" title="Editar Serviço" hide-footer>&ndash;&gt;-->
<!--&lt;!&ndash;        <WorkCreate :formProps="work" class="modal-color"></WorkCreate>&ndash;&gt;-->
<!--&lt;!&ndash;    </b-modal>&ndash;&gt;-->
      <b-card no-body class="overflow-hidden m-1" style="max-width: 500px; min-width: 300px; max-height: 200px; min-height: 200px">
          <b-row no-gutters cols="12">
              <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                  <b-card-header class="p-1 ">
                      <div class="category-header">
                          {{ work.category_title }}
                      </div>
                      <div>
                          {{ work.title }}
                      </div>
                  </b-card-header>
                  <b-card-body  style="font-size: 15px;">
                      <b-card-text>
                          {{ work.description }}
                      </b-card-text>
                  </b-card-body>
              </b-col>
          </b-row>
      </b-card>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

// import WorkCreate from "../Form/WorkCreate";
import { BCard, BCardBody, BCardText, BCardHeader } from 'bootstrap-vue'




export default {
    name: 'work',
    components: {
        'b-card': BCard,
        'b-card-text': BCardText,
        'b-card-body': BCardBody,
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
    .category-header {
        border-radius: 5px;
        background: rgb(52, 58, 64);
        color: white;
        text-align: center;
    }

</style>