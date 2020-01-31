<template>
    <b-container>
        <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Categorias de Serviços</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-button align="right" @click="showNewCategory">Nova</b-button>
            </b-navbar-nav>
        </b-collapse>

        </b-navbar>

<!--        <ModalCategory :operation="">-->

<!--        </ModalCategory>-->

<!--        <b-modal >-->
<!--            <div class="text-center">-->
<!--                <b-form-input v-model="categoryName.title" placeholder="Categoria"></b-form-input>-->
<!--            </div>-->

<!--            <b-button class="mt-3" variant="outline-success" block @click="newCategory(categoryName)">Salvar</b-button>-->
<!--            <b-button class="mt-2" variant="outline-danger" block @click="toggleModal">Cancelar</b-button>-->
<!--        </b-modal>-->



        <b-list-group>

            <b-list-group-item class="mt-1" v-for="category in categories" :key="category.id">
                <b-row>
                    <b-col align="center" sm="8">
                        <b>{{ category.title }}</b>
                    </b-col>
                    <b-col align="right" sm="4">
                        <b-button @click="showUpdateCategory(category)"> <b-icon icon="gear"></b-icon> </b-button>
                        <b-button class="ml-2" @click="showDestroyCategory(category)"> <b-icon icon="trash"></b-icon> </b-button>
                    </b-col>

                </b-row>

            </b-list-group-item>
        </b-list-group>

    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import ModalCategory from "../Modal/ModalCategory";

export default {
    comments: {
        ModalCategory
    },
    data() {
        return {
            categoryName: {
                title:'',
                titleModal: ''
            }
        }
    },
    methods: {
        ...mapActions(['loadCategories', 'addCategory']),
        loadCategoriesLocal() {
        this.loadCategories()
        },
        onReset() {
            this.categoryName.title = ''
        },
        showNewCategory() {
            this.$refs['my-modal'].show()
        },
        showUpdateCategory() {
            this.$refs['my-modal'].show()
        },
        showDestroyCategory() {

        },
        toggleModal() {
            this.onReset()
            this.$refs['my-modal'].hide();
        },

        //Actions Modal
        newCategory(category) {
            this.toggleModal("my-modal")
            this.addCategory(category)
            this.onReset()
        },
        updateCategory(category) {
            this.toggleModal("my-modal")
            this.addCategory(category)
            this.onReset()
        },
        destroyCategory(category) {
            this.toggleModal("my-modal")
            this.addCategory(category)
            this.onReset()
        },


    },
    computed: {
        ...mapGetters({
            categories: 'categoriesList'
        })
    },
    mounted() {
        this.loadCategoriesLocal();
    }
}
</script>

<style>

</style>