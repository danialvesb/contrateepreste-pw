<template>
  <div class="bv-example-row card-item">
    <b-card
        :title= work.title
        tag="article"
        style="max-width: 20rem;"
        class="mb-1 mt-1 ml-1 "
    >
        <b-card-text>
            {{ work.description }}
            <hr>
            <strong>Id: </strong>  {{ work.id }}
            <hr>
        </b-card-text>

        <b-button href="#" disabled=""  variant="primary" class="mr-2">Ofertar</b-button>
        <b-button href="#" variant="warning" class="mr-2" @click="modalShow = !modalShow">Editar</b-button>
        <b-button href="#" variant="danger" @click="deleteWork">Apagar</b-button>
    </b-card>

    <b-modal v-model="modalShow" id="modal-1" title="Editar Serviço" hide-footer>
        <WorkCreate :formProps="work" class="modal-color"></WorkCreate>
    </b-modal>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import WorkCreate from '@/components/Form/WorkCreate'
 
export default {
    
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
    components: {
        WorkCreate
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
    .card-item {
        padding: 10px;
    }


</style>