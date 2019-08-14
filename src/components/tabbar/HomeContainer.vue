<template>
    <div class="swipe-container">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.swipe-container {
    height: 200px;
}
</style>