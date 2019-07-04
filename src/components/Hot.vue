<template>
    <div class="hot">This is hot...</div>
</template>
<script>
export default {
    name:"Hot",

    mounted(){
        this.$store.commit('toggleTab',{tab:"Hot"})
    }
}
</script>
<style lang="scss" scoped>

</style>

