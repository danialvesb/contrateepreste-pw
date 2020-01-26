<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Categorias de Serviços</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-button align="right" @click="modalShow=!modalShow">Nova</b-button>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>

        <b-modal v-model="modalShow" id="modal-1" title="Cadasto">
            <div class="d-block text-center">
                <b-form-input v-model="categoryName" placeholder="Categoria"></b-form-input>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
        </b-modal>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            modalShow: false,
            categoryName: ''
        }
    },
    methods: {
      ...mapActions(['loadCategories', 'addCategory']),
      loadCategoriesLocal() {
        this.loadCategories()
      }

    },
    mounted() {
        this.loadCategoriesLocal();
    }
}
</script>

<style>
    .navBar {
        height: 40px;
        
        
    }
</style>