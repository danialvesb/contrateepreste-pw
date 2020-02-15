<template>
    <div>
        <div class="content">
            <router-view></router-view>
        </div>


    </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>
    .content {
        position: relative;
        top: 80px;
        width: 85%;
        background: blue;
    }


</style>