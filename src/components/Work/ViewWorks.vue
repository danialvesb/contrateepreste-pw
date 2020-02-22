<template>
    <b-container class="container">
<!--        <b-row>-->
<!--            <b-col class="col1">-->
<!--                <b-card>-->
<!--                    <b-media>-->
<!--                        <template v-slot:aside>-->
<!--                            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>-->
<!--                        </template>-->
<!--                        <h5 class="mt-0">Media Title</h5>-->
<!--                        <p>-->
<!--                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.-->
<!--                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc-->
<!--                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->
<!--                        </p>-->
<!--                        <p>-->
<!--                            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque-->
<!--                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
<!--                        </p>-->
<!--                        <b-media>-->
<!--                            <template v-slot:aside>-->
<!--                                <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>-->
<!--                            </template>-->

<!--                            <h5 class="mt-0">Nested Media</h5>-->
<!--                            <p class="mb-0">-->
<!--                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in-->
<!--                                faucibus.-->
<!--                            </p>-->
<!--                        </b-media>-->
<!--                    </b-media>-->
<!--                </b-card>-->
<!--            </b-col>-->
<!--            <b-col>-->
<!--                teste-->
<!--            </b-col>-->
<!--        </b-row>-->
        <b-row>
            <b-col>1 of 3</b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
    </b-container>
</template>

<script>
    // import { BMedia, BCard, BImg, BContainer, BRow, BCol } from 'bootstrap-vue'
    import {BContainer, BRow, BCol } from 'bootstrap-vue'

    export default {
        components: {
            // 'b-media': BMedia,
            // 'b-card': BCard,
            // 'b-img': BImg,
            'b-container': BContainer,
            'b-row': BRow,
            'b-col': BCol
        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        top: 60px;
    }
</style>