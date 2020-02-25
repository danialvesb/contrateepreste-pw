<template>
    <div>
        <b-card class="mb-2 mt-0 box-shadow" style="max-width: 540px; min-width: 400px">
            <b-card-header header-bg-variant="dark" header-text-variant="white">
                <h3>Filtros</h3>
            </b-card-header>
            <b-card-body class="card-body">
                <div class="input-title">
                    <b-form-input  placeholder="Título" v-model="search"></b-form-input>
                </div>
                <hr>
                <b-form-select v-model="selected" :options="categories" @change="selectionCategory($event.target.value)" >
                </b-form-select>
                <div class="d-flex justify-content-between align-items-center">

                </div>
            </b-card-body>
            <b-card-footer footer-bg-variant="dark">
                <div class="btn-group">
                    <b-button @click="emitFilters()">Filtrar</b-button>
                </div>

            </b-card-footer>
        </b-card>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import { BCard, BButton, BCardBody, BCardFooter, BCardHeader, BFormInput, BFormSelect} from 'bootstrap-vue'

    export default {
        data() {
          return {
              search: '',
              categoryName: '',
              selected: ''
          }
        },
        components: {
            'b-card': BCard,
            'b-button': BButton,
            'b-card-body': BCardBody,
            'b-card-footer': BCardFooter,
            'b-card-header': BCardHeader,
            'b-form-input': BFormInput,
            'b-form-select': BFormSelect

        },
        computed: {
            ...mapGetters({
                categories: 'categoriesListSelectedOptions',
                works: 'worksList'
            }),
        },
        methods: {
            ...mapActions(['loadCategories']),
            emitFilters() {
                if (this.categoryName != 'Selecionar uma categoria') {
                    this.$emit('filterData', {'title': this.search, 'category': this.categoryName})
                }else {
                    this.$emit('filterData', {'title': this.search, 'category': ''})
                }

                this.search = ''
            },
            selectionCategory(selectedName) {
                this.categoryName = selectedName
            }
        },
        mounted() {
            this.loadCategories()
        }

    }
</script>


<style scoped>

</style>