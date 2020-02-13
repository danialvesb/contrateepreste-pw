<template>
<div>
    <b-form v-if="show" class="b-form-color">

        <b-form-group
            id="input-group-title"
            label="Título:"
            label-for="input-title"
            description="Insira um título que atraia o interesse das pessoas.">

            <b-form-input
                id="input-title"
                v-model="form.title"
                type="text"
                required
                placeholder="Insira aqui">
            </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-category" label="Categoria:" label-for="input-category">
            <b-form-select
                id="input-category"
                :options="categories"
                v-model="form.category"
                value-field="item"
                text-field="name"
                required>
            </b-form-select>
        </b-form-group>

        <b-form-group id="input-group-description" label="Descrição:" label-for="input-description">
            <b-form-textarea
                id="input-description"
                v-model="form.description"
                placeholder="Descrição do Serviço"
                rows="3"
                max-rows="6"
                required>
            </b-form-textarea>
        </b-form-group>



        <b-button v-if="formProps" variant="primary" @click="onSubmitUpdate(form)" class="mr-3">Atualizar Serviço</b-button>
        <b-button v-else variant="primary" @click="onSubmit(form)" class="mr-3">Salvar Serviço</b-button>
        <b-button variant="danger" @click="onReset" class="mr-3 mt-1">Limpar Campos</b-button>
    </b-form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    props: {
        formProps: {
            type: Object
        }
    },
    data() {
        return {
            show: true,
            form: {
                'id': this.formProps ? this.formProps.id : '',
                'title': this.formProps ? this.formProps.title : '',
                'category': this.formProps ? { 'item': this.formProps.category  } : '1',
                'description': this.formProps ? this.formProps.description : '',
                'file': 'ss'
            },
        }
    },
    computed: {
        ...mapGetters({
            categories: 'categoriesListSelectedOptions'
        })
    },
    methods: {
        ...mapActions(['addWork', 'updateWork', 'loadCategories']),
        onReset() {
            this.form.title = '',
            this.form.category = '0',
            this.form.description = ''
        },
        onSubmit(form) {
            this.addWork(form)
            this.onReset()
        },
        onSubmitUpdate() {
            this.updateWork(this.form)
        },
    },
    mounted() {
        this.loadCategories()
    }
}



</script>

<style scoped>
    .b-form-color {
        display: flex;
        flex-direction: column;
        color: white;
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        background-color: rgb(36, 64, 66);
    }
</style>