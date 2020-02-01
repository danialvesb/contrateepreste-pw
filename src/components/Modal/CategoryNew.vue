<template>

    <b-modal id="modal-new" ref="confirm-modal-new" hide-footer>
        <div class="d-block text-center">
            <h3>Nova Categoria</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Sim</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Cancelar</b-button>
    </b-modal>

</template>

<script>
    export default {
        props: {
            categoryProps: {
                type: Object,
                required: true
            }
        },
        methods: {
            hideModal() {
                this.$refs['confirm-modal-new'].hide()
            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['confirm-modal-new'].toggle('#toggle-btn')
            }
        }
    }
</script>

<style scoped>

</style>