<template>
    <b-container>
        <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Categorias de Serviços</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-button align="right" @click="showModalNew()" ref="btnShowNew">Nova</b-button>
            </b-navbar-nav>
        </b-collapse>

        </b-navbar>

        <b-list-group>

            <b-list-group-item class="mt-1" v-for="category in categories" :key="category.id">
                <b-row>
                    <b-col align="center" sm="8">
                        <b>{{ category.title }}</b>
                    </b-col>
                    <b-col align="right" sm="4">
                        <b-button @click="showModalUpdate()" ref="btnShowUpdate"> <b-icon icon="gear"></b-icon> </b-button> <!--edit-->
                        <b-button class="ml-2" @click="showModalDelete(category)"  ref="btnShowDelete"> <b-icon icon="trash"></b-icon> </b-button>  <!--delete-->
                    </b-col>

                </b-row>

            </b-list-group-item>
        </b-list-group>

        <CategoryUpdate></CategoryUpdate>
        <CategoryNew></CategoryNew>

    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


import CategoryUpdate from "../Modal/CategoryUpdate";
import CategoryNew from "../Modal/CategoryNew";

export default {
    components: {CategoryNew, CategoryUpdate},
    data() {
        return {
            categoryName: {
                title: '',
                categoryUpdate: null,
            }
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

</style>