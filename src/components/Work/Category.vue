<template>
    <b-container fluid>
        <b-row class="justify-content-md-left mt-2  p-0" >

            <b-col md="4" >
                <b-button>Cadastrar Categoria</b-button>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center m-3">

            <b-col md="4" >
                <strong>Categorias</strong>
                <b-table striped hover :items="categories" :fields="fields" head-variant="dark" style="min-width: 500px">
                    <template v-slot:cell(Editar)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            Editar
                        </b-button>
                    </template>
                    <template v-slot:cell(Excluir)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            Excluir
                        </b-button>
                    </template>
                </b-table>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


// import CategoryUpdate from "../Modal/CategoryUpdate";
// import CategoryNew from "../Modal/CategoryNew";

import { BTable, BButton } from 'bootstrap-vue'

export default {
    components: {
        // CategoryNew,
        // CategoryUpdate,
        'b-table': BTable,
        'b-button': BButton
    },
    data() {
        return {
            categoryName: {
                title: '',
                categoryUpdate: null,
            },
            fields: [{id: 'Código'}, { title:'Título'}, 'Editar', 'Excluir'],
        }
    },
    methods: {
        ...mapActions(['loadCategories', 'removeCategory']),
        onReset() {
            this.categoryName.title = ''
        },
        showModalUpdate() {
            this.$root.$emit('bv::show::modal', 'modal-update', '#btnShowUpdate')
        },
        showModalNew() {
            this.$root.$emit('bv::show::modal', 'modal-new', '#btnShowNew')
        },
        showModalDelete(category) {
            this.boxOne = ''
            this.$bvModal.msgBoxConfirm('Confirma Apagar Categoria?', {
                okTitle: 'Sim',
                cancelTitle: 'Cancelar',
            })
                .then(value => {
                    if (value) {
                        this.removeCategory(category.id)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    computed: {
        ...mapGetters({
            categories: 'categoriesList'
        })
    },
    mounted() {
        this.loadCategories()
    },
}
</script>

<style>
    .category-item {
        display: flex;
        flex-direction: column;
        width: 50%;
        border-radius: 10px;
    }

</style>