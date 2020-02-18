<template>
    <div class="b-filter">
        <header class="header">
            <div class="title">
                Filtros
            </div>
        </header>
        <hr class="hr">
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

    .b-filter {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .header {
        display: flex;
        flex-direction: column;
        min-height: 20%;
        width: 100%;
    }
    .input-title {
        width: 100%;
    }
    .input-category {
        width: 100%;
    }

    .main {
        display: flex;
        flex-direction: column;
        min-height: 60%;
    }
    .footer {
        min-height: 15%;
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
         background: rgb(100, 103, 104);
    }
    .footer button {
        display: flex;
        flex-direction: row;
        width: 30%;
        padding: 10px;
        justify-content: center;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        border: 0;
        background: rgb(22, 32, 44);
        color: white;
    }
    .footer button:hover{
        background: rgba(22, 32, 44, 0.52);
        color: white;
        border: 0px;

    }

    .title {
        display: flex;
        flex-direction: row;
        color: white;
        padding: 10px;
    }
    .input-title {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin: 5px;
        align-self: center;

    }

    .input-title input{
        width: 90%;
        height: 30px;
        outline: none;
        border-radius: 10px;
    }
    .hr {
        width: 100%;
    }

    .input-category .select {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 90%;
        border-radius: 5px;
    }

</style>