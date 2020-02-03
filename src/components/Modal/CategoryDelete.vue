<template>

    <b-modal ref="confirm-modal-delete" id="modal-delete" hide-footer>
        <div class="d-block text-center">
            <h3>Apagar Categoria?</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Confirmar</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="hideModal">Cancelar</b-button>
    </b-modal>

</template>

<script>

    export default {
        props: {
            categoryProps: {
                type: Object,
                required: false
            },
        },
        methods: {
            hideModal() {
                this.$refs['confirm-modal-delete'].hide()
            },

        }
    }
</script>

<style scoped>

</style>