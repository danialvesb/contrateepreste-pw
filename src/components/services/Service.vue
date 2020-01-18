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
        <b-button href="#" variant="warning" class="mr-2">Editar</b-button>
        <b-button href="#" variant="danger">Apagar</b-button>
    </b-card>
  </div>
</template>

<script>

 
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    },
    methods: {
        offer() {

        },
        edit() {

        },
        delete() {

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