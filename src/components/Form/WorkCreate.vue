<template>
<div class="container">
<!--    <b-form v-if="show" class="b-form-color">-->

<!--        <b-form-group-->
<!--            id="input-group-title"-->
<!--            label="Título:"-->
<!--            label-for="input-title"-->
<!--            description="Insira um título que atraia o interesse das pessoas.">-->

<!--            <b-form-input-->
<!--                id="input-title"-->
<!--                v-model="form.title"-->
<!--                type="text"-->
<!--                required-->
<!--                placeholder="Insira aqui">-->
<!--            </b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-form-group id="input-group-category" label="Categoria:" label-for="input-category">-->
<!--            <b-form-select-->
<!--                id="input-category"-->
<!--                :options="categories"-->
<!--                v-model="form.category"-->
<!--                value-field="item"-->
<!--                text-field="name"-->
<!--                required>-->
<!--            </b-form-select>-->
<!--        </b-form-group>-->

<!--        <b-form-group id="input-group-description" label="Descrição:" label-for="input-description">-->
<!--            <b-form-textarea-->
<!--                id="input-description"-->
<!--                v-model="form.description"-->
<!--                placeholder="Descrição do Serviço"-->
<!--                rows="3"-->
<!--                max-rows="6"-->
<!--                required>-->
<!--            </b-form-textarea>-->
<!--        </b-form-group>-->



<!--        <b-button v-if="formProps" variant="primary" @click="onSubmitUpdate(form)" class="mr-3">Atualizar Serviço</b-button>-->
<!--        <b-button v-else variant="primary" @click="onSubmit(form)" class="mr-3">Salvar Serviço</b-button>-->
<!--        <b-button variant="danger" @click="onReset" class="mr-3 mt-1">Limpar Campos</b-button>-->
<!--    </b-form>-->

    <div class="header">
        <h1>Quais as informações do serviço?</h1>
    </div>
    <div class="body">
            <div class="form-input-files">

        </div>
        <div class="form-input">
            <div class="title-input">
                <b-form-input class="input-item-title"  placeholder="Informe o título do serviço..."></b-form-input>


            </div>
            <div class="category-input">
                <b-form-select
                        id="input-category"
                        :options="categories"
                        v-model="dataForm.category"
                        value-field="item"
                        text-field="name"
                        required>
                </b-form-select>
            </div>
            <div class="description-input">
                <b-form-textarea class="input-text-item"></b-form-textarea>
            </div>
        </div>



    </div>
    <div class="footer">
        <b-button>Salvar</b-button>
    </div>

</div>

</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { BFormInput, BFormTextarea, BFormSelect, BButton } from 'bootstrap-vue'


export default {
    props: {
        formProps: {
            type: Object
        }
    },
    components: {
        'b-form-input': BFormInput,
        'b-form-textarea': BFormTextarea,
        'b-form-select': BFormSelect,
        'b-button': BButton
    },
    data() {
        return {
            show: true,
            dataForm: {
                'id': this.formProps ? this.formProps.id : '',
                'title': this.formProps ? this.formProps.title : '',
                'category': this.formProps ? { 'item': this.formProps.category  } : 0,
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
    .container {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 60px;
        align-items: center;
        justify-content: center;
        margin: 0px;
    }
    .header {
        display: flex;
        flex-direction: column;
        width: 95%;
        height: 50px;
        border: solid 1px gray;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .body {
        display: flex;
        flex-direction: row;
        width: 95%;
        height: 500px;
        border: solid 1px gray;
        border-radius: 5px;
        justify-content: center;
    }

    .form-input {
        display: flex;
        flex-direction: column;
        width: 49%;
        flex-wrap: wrap;
        margin: 2px;
    }

    .form-input-files {
        display: flex;
        flex-direction: column;
        width: 49%;
        flex-wrap: wrap;
        margin: 2px;
        background: rgba(128, 128, 128, 0.2);
        border-radius: 5px;
    }


    .title-input {
        display: flex;
        flex-direction: row;
        margin: 5px;
        width: 100%;

    }
    .input-item-title {
        height: 30px;
        font-size: 20px;
        width: 100%;
    }
    #input-category {
        font-size: 20px;
        width: 100%;
    }
    .input-text-item {
        height: 250px;
    }

    .description-input {
        display: flex;
        flex-direction: column;
        margin: 5px;
        width: 100%;

    }
    .category-input {
        display: flex;
        flex-direction: row;
        background: gray;
        margin: 5px;
        width: 100%;
        align-items: center;
    }

    .footer {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 20px;
        border: solid 1px gray;
        border-radius: 5px;

    }

</style>