<template>

    <b-modal id="modal-update" ref="confirm-modal-update" hide-footer>
        <div class="d-block text-center">
            <h3>Atualizar Categoria</h3>
            <b-form-input id="modal-input-value"></b-form-input>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Sim</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Cancelar</b-button>
    </b-modal>

</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions(['updateCategory']),
            hideModal() {
                this.$refs['confirm-modal-update'].hide()

            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['confirm-modal-update'].toggle('#toggle-btn')
            },
            updateCategoryLocal() {
                this.updateCategory()
            }
        }
    }
</script>

<style scoped>

</style>