<template>
    <div class="swipe-container">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../images/timg.jpg" style="width: 100%;height: 100%"></van-swipe-item>
            <van-swipe-item><img src="../../images/timg2.jpg" style="width: 100%;height: 100%"></van-swipe-item>
        </van-swipe>
        <van-grid square column-num="3" class="grid-container">
            <van-grid-item ><div class="grid-item"><img src="../../images/menu1.png" alt=""><p>文字</p></div></van-grid-item>
            <van-grid-item ><div class="grid-item"><img src="../../images/menu2.png" alt=""><p>文字</p></div></van-grid-item>
            <van-grid-item ><div class="grid-item"><img src="../../images/menu3.png" alt=""><p>文字</p></div></van-grid-item>
            <van-grid-item ><div class="grid-item"><img src="../../images/menu4.png" alt=""><p>文字</p></div></van-grid-item>
            <van-grid-item ><div class="grid-item"><img src="../../images/menu5.png" alt=""><p>文字</p></div></van-grid-item>
            <van-grid-item ><div class="grid-item"><img src="../../images/menu6.png" alt=""><p>文字</p></div></van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swipeItems: [],
        }
    },
    created() {
        this.getSwipe();
    },
    methods: {
        getSwipe() {
            this.swipeItems.push('../../images/timg2.jpg')
        }
    }
}
</script>

<style lang="less" scoped>
.swipe-container {
    height: 200px;
    .van-swipe {
        height: 100%;
        .van-swipe-item {
            &:nth-child(1) {
                 background-color: red;
             }
        }
    }
    .grid-container {
        .grid-item {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            img {
                width: 50%;
                margin: 0 50%;
                transform: translateX(-50%);
            }
            p {
                text-align: center;
            }
        }

    }
}
</style>