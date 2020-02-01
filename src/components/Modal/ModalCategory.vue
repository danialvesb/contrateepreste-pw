<template>
    <b-modal ref="my-modal" hide-footer>
        <strong> {{ operation.title }} </strong>
    </b-modal>
</template>

<script>
    export default {
        props: {
            operation: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>