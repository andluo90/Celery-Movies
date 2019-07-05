<template>
    <div class="loading" >
        <span class="iconfont icon-Loading"></span>
    </div>
</template>
<script>
export default {
    name:"Loading"
}
</script>
<style lang="scss" scoped>
    $color:#ff5722;
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform:rotate(360deg);
        }
    }

    .loading {
        position: absolute;
        top: calc(50vh - 50px);
        left: 50%;
        transform: translateX(-50%);  

        .iconfont {
            display: inline-block;
            font-size: 3em;
            color:$color;
            animation: 1s rotate linear infinite;
        }
    }
</style>

