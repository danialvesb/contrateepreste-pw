<template>
<b-container fluid>
    <b-row class="m-2">
        <b-col md="2">
            <div >
                <b-card >
                    <b-card-body body-bg-variant="dark" class="p-1">
                        <b-card-img src="https://picsum.photos/600/300/?image=25"></b-card-img>
                    </b-card-body>
                    <b-card-footer footer-bg-variant="dark" class="p-1">
                        <b-button href="#"><div style="font-size: 10px">Inserir imagem</div></b-button>
                    </b-card-footer>
                </b-card>
            </div>
        </b-col>
        <b-col md="8" style="background: rgb(52, 58, 64); color: white">
            <b-form>
                <b-form-group id="input-group-1" label="Título" label-for="input-1" description="Informe um título para o serviço.">
                    <b-form-input id="input-1" v-model="dataForm.title" type="email" required placeholder="Título"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Descrição" label-for="input-1" description="Informe a descrição para o serviço">
                    <b-form-text-area id="input-2" v-model="dataForm.description" type="email" required placeholder="Descrição"></b-form-text-area>
                </b-form-group>
            </b-form>
        </b-col>
        <b-col md="2" >
            <b-form>
                <b-form-group id="input-group-3" label="Categorias" label-for="input-1">
                    <b-form-checkbox-group v-model="dataForm.category" :options="categories" stacked buttons style="min-width: 200px">
                    </b-form-checkbox-group>
                </b-form-group>
            </b-form>
{{dataForm.category}}
        </b-col>
    </b-row>
    <b-row class="mt-2; ml-0;p-0">
        <b-col md="12" style="background: rgb(52, 58, 64); padding: 5px;" align="center" >
            <b-button-group>
                <b-button variant="light">Salvar</b-button>
                <b-button variant="light">Limpar campos</b-button>
                <b-button variant="danger">Excluir Serviço</b-button>
            </b-button-group>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
// import { BFormInput, BFormTextarea, BFormSelect, BButton } from 'bootstrap-vue'
import { BFormInput, BFormGroup, BForm, BFormTextarea, BCard, BCardFooter, BCardBody, BCardImg, BButton, BFormCheckboxGroup, BButtonGroup } from 'bootstrap-vue'

export default {
    props: {
        formProps: {
            type: Object
        }
    },
    components: {
        'b-form-input': BFormInput,
        'b-form-group': BFormGroup,
        'b-form': BForm,
        'b-form-text-area': BFormTextarea,
        'b-card': BCard,
        'b-card-footer': BCardFooter,
        'b-card-body': BCardBody,
        'b-card-img': BCardImg,
        'b-button': BButton,
        'b-form-checkbox-group': BFormCheckboxGroup,
        'b-button-group': BButtonGroup
        // 'b-form-textarea': BFormTextarea,
        // 'b-form-select': BFormSelect,
        // 'b-button': BButton
    },
    data() {
        return {
            show: true,
            dataForm: {
                'id': '',
                'title': '',
                'category': [],
                'description': '',
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


</style>