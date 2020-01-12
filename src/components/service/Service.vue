<template>
  <div class="bv-example-row">
    <b-card
        :title= service.title
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-1 mt-1 ml-1 "
    >
        <b-card-text>
            {{ service.description }}
            <hr>
            <strong>Id: </strong>  {{ service.id }}
            <hr>
        </b-card-text>

        <b-button href="#" variant="primary">Ofertar</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
</style>