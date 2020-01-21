<template>
    <b-alert v-if="show" variant="success" show>Success Alert</b-alert>
</template>

<script>
export default {
 data() {
     return {
         show: false
     }
 },
 methods: {
     showAlert() {
         setTimeout( alert => {
             this.show = !this.show
         }, 1000)
     }
 }
}
</script>

<style>

</style>