<template>

    <b-modal id="modal-new" ref="confirm-modal-new" hide-footer>
        <div class="d-block text-center">
            <h3>Nova Categoria</h3>
            <b-form-input v-model="category.title"></b-form-input>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="addCategoryLocal()">Salvar</b-button>
        <b-button class="mt-2" variant="outline-warning" block @click="hideModal">Cancelar</b-button>
    </b-modal>

</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                category: {
                    title: ''
                }
            }
        },
        methods: {
            ...mapActions(['addCategory']),

            hideModal() {
                this.category.title = ''
                this.$refs['confirm-modal-new'].hide()
            },
            addCategoryLocal() {
                this.addCategory(this.category)
                this.hideModal();
            },
        }
    }
</script>

<style scoped>

</style>