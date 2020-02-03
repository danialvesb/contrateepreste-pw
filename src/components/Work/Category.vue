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
                        <b-button @click="showModalUpdate(category)" ref="btnShowUpdate"> <b-icon icon="gear"></b-icon> </b-button> <!--edit-->
                        <b-button class="ml-2" @click="showModalDelete()"  ref="btnShowDelete"> <b-icon icon="trash"></b-icon> </b-button>  <!--delete-->
                    </b-col>

                </b-row>

            </b-list-group-item>
        </b-list-group>

        <CategoryDelete></CategoryDelete>
        <CategoryUpdate></CategoryUpdate>
        <CategoryNew></CategoryNew>

    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import CategoryDelete from "../Modal/CategoryDelete";
import CategoryUpdate from "../Modal/CategoryUpdate";
import CategoryNew from "../Modal/CategoryNew";

export default {
    components: {CategoryNew, CategoryUpdate, CategoryDelete},
    comments: {
        CategoryDelete,
        CategoryUpdate,
        CategoryNew,
    },
    data() {
        return {
            categoryName: {
                title:'',
                categoryUpdate: null
            }
        }
    },
    methods: {
        ...mapActions(['loadCategories']),
        onReset() {
            this.categoryName.title = ''
        },
        showModalDelete() {
            this.$root.$emit('bv::show::modal', 'modal-delete', '#btnShowDelete')
        },
        showModalUpdate(category) {
            console.log(JSON.stringify(category))
            // this.$root.$emit('bv::show::modal', 'modal-input-value', category.title)
            //desafio passar o nome da categoria ao clicar em edita modal.
            this.$root.$emit('bv::show::modal', 'modal-update', '#btnShowUpdate')
        },
        showModalNew() {
            this.$root.$emit('bv::show::modal', 'modal-new', '#btnShowNew')
        },


    },
    computed: {
        ...mapGetters({
            categories: 'categoriesList'
        })
    },
    mounted() {
        this.loadCategories();
    }
}
</script>

<style>

</style>