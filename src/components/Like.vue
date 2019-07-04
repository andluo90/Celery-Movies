<template>
    <div class="lie">This is like...</div>
    
</template>
<script>
export default {
    name:"Like",

    mounted(){
        this.$store.commit('toggleTab',{tab:"Like"})
    }
}
</script>
<style lang="scss" scoped>

</style>

