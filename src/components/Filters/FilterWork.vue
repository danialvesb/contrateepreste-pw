<template>
    <b-container>
        <b-row>
            <b-col md="12">
                <div class="filter">
                    <header class="header">
                        <div class="title">
                            Filtros
                        </div>
                    </header>
                    <hr>
                    <main class="main">
                        <div class="input-title">
                            <input type="text" placeholder="Título" v-model="search">
                        </div>
                        <hr>
                        <div class="title">
                            Categoria
                        </div>

                        <div class="input-category">
                            <select class="select" @change="selectionCategory($event.target.value)" >
                                <option  autofocus>Selecionar uma categoria</option>
                                <option v-for="( category ) in categories" :key="category.id">{{ category.name }}</option>
                            </select>
                        </div>
                    </main>
                    <footer class="footer">
                        <button @click="emitFilters()">Filtrar</button>
                    </footer>

                </div>
            </b-col>
        </b-row>


    </b-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'


    export default {
        data() {
          return {
              search: '',
              categoryName: ''
          }
        },
        components: {
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
    .filter {
        background-color: rgb(52, 58, 64);
        color: white;
        padding: 5px;
        border-radius: 5px;
    }


</style>