<template>
  <div class="bv-example-row">
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

        <b-button href="#" variant="primary" class="mr-2">Ofertar</b-button>
        <b-button href="#" variant="warning" class="mr-2" @click="modalShow = !modalShow">Editar</b-button>
        <b-button href="#" variant="danger" @click="deleteWork">Apagar</b-button>
    </b-card>

    <b-modal v-model="modalShow" id="modal-1" title="Editar Serviço" hide-footer>
        <WorkCreate :formProps="work"></WorkCreate>
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
        offer() {

        },
        edit() {
             

        },
        deleteWork() {
            this.$http.delete(`api/services/${this.work.id}`).then(resp => {
                const data = resp.data

                if(data) {
                    this.removeWork(this.work.id)
                }
            }).catch(err => {
                alert(err.data)
            } )
        }
    },
    computed: {
        

    }
}
</script>

<style scoped>
    div {
        padding: 10px;
    }
</style>