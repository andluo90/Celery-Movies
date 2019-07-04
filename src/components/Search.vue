<template>
    <div class="search">This is search...</div>
    
</template>
<script>
export default {
    name:"Search",

    mounted(){
        this.$store.commit('toggleTab',{tab:"Search"})
    }
}
</script>
<style lang="scss" scoped>

</style>

