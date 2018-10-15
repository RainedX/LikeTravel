<template>
    <div class="container" @click="handleClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            swiperOption: {
                observeParents:true,
                observer:true,
               pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },    
            },
        }
    },
    props: {
        imgs: {
            type: Array
        }
    },
    methods: {
        handleClick() {
            this.$emit("closeGallery");
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 99
        background #000
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            .gallery-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>


