<template>
    <b-container fluid>
        <b-row class="m-2">
            <b-col md="2">
                    <b-card>
                        <b-card-header class="p-0">

                        </b-card-header>

                        <b-card-body body-bg-variant="dark" class="p-1">
                            <b-card-img src="https://picsum.photos/600/300/?image=25"></b-card-img>
                        </b-card-body>

                        <b-card-footer class="p-0">
                        </b-card-footer>

                    </b-card>
            </b-col>
            <b-col md="8" style="background: rgb(52, 58, 64); color: white">
                Título
                <hr>
                Descrição
                <hr>
                Categorias
                <hr>
                Data de cadastro
                <hr>





            </b-col>
        </b-row>
        <b-row class="mt-2; ml-0;p-0">
            <b-col md="12" style="background: rgb(52, 58, 64); padding: 5px;" align="center" >
                <b-button-group>
                    <b-button variant="light">Editar</b-button>
                    <b-button variant="light">Visualizar ofertas desse serviço</b-button>
                </b-button-group>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
    import { BCardBody, BCardFooter, BCardHeader, BCardImg, BButton, BButtonGroup } from 'bootstrap-vue'

    export default {
        components: {
            'b-card-header': BCardHeader,
            'b-card-body': BCardBody,
            'b-card-footer': BCardFooter,
            'b-card-img': BCardImg,
            'b-button': BButton,
            'b-button-group': BButtonGroup
        },
        directives: {

        }
    }
</script>

<style scoped>

</style>