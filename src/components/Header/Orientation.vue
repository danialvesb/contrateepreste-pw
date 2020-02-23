<template>
    <b-container class="container" fluid>
        <b-row cols="12" md="12">
            <b-col>
                Orientação
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {BContainer, BRow, BCol } from 'bootstrap-vue'
    export default {
        components: {
            'b-container': BContainer,
            'b-row': BRow,
            'b-col': BCol
        }
    }
</script>

<style scoped>
    .container {
        background: rgba(63, 68, 72, 0.36);
        color: white;
        height: 30px;
        background: blue;
    }

</style>