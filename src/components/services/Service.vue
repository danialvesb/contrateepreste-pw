<template>
  <div class="bv-example-row">
    <b-card
        :title= service.title
        tag="article"
        style="max-width: 20rem;"
        class="mb-1 mt-1 ml-1 "
    >
        <b-card-text>
            {{ service.description }}
            <hr>
            <strong>Id: </strong>  {{ service.id }}
            <hr>
        </b-card-text>

        <b-button href="#" variant="primary" class="mr-2">Ofertar</b-button>
        <b-button href="#" variant="warning" class="mr-2" @click="modalShow = !modalShow">Editar</b-button>
        <b-button href="#" variant="danger" @click="deleteService">Apagar</b-button>
    </b-card>

    <b-modal v-model="modalShow" id="modal-1" title="Editar Serviço">
        <ServiceCreate :formProps="service"></ServiceCreate>
    </b-modal>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ServiceCreate from '@/components/forms/ServiceCreate'
 
export default {
    
    props: {
        service: {
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
        ServiceCreate
    },
    methods: {
        ...mapActions(['removeService']),
        offer() {

        },
        edit() {
             

        },
        deleteService() {
            this.$http.delete(`api/services/${this.service.id}`).then(resp => {
                const data = resp.data

                if(data) {
                    this.removeService(this.service.id)
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