<template>
    <div class="top">This is top...</div>
    
</template>
<script>
export default {
    name:"Top",

    mounted(){
        this.$store.commit('toggleTab',{tab:"Top"})
    }
}
</script>
<style lang="scss" scoped>

</style>

