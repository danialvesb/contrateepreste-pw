<template>
    <div class="b-filter">
        <header>
            <div class="title">
                Filtros
            </div>
        </header>
        <hr class="hr">
        <main>
            <div class="input-title">
                <input type="text" placeholder="Título">
            </div>
            <hr>
            <div class="title">
                Categoria
            </div>

            <div class="input-category">
                <select class="select">
                    <option>Selecionar uma categoria</option>
                    <option>sss</option>
                    <option>sss</option>
                    <option>sss</option>
                    <option>sss</option>
                </select>
            </div>
        </main>

    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .b-filter {
        display: flex;
        flex-direction: column;
    }

    .title {
        color: white;
        padding: 10px;
    }
    .input-title {
        display: flex;
        flex-direction: row;

        margin: 5px;
        align-self: center;

    }

    .input-title input{
        width: 100%;
        height: 30px;
        outline: none;
    }
    .hr {
        width: 100%;
        max-width: 100%;
    }

    .input-category .select {
        display: flex;
        flex-direction: row;
        width: 100%;

    }
</style>