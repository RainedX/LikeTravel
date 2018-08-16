<template>
    <div class="wrapper" v-if="hasData">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    observer:true, 
                    observeParents:true,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
                        bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
                        hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
                        clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                    },
                },
            }
        },
        props: {
            swiperList: Array,
            hasData: Boolean
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        background #eee
        padding-bottom 31.2%
    .swiper-img
        width 100%
</style>
