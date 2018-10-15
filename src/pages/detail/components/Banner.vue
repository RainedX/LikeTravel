<template>
    <div>
        <div class="banner" @click="handleClick">
            <img class="banner-img" :src="bannerImg" alt="" />
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont icon-tupian banner-icon"></span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <gallery :imgs="gallaryImgs" v-show="showGallery" @closeGallery="closeGallery"></gallery>
        </fade-animation>
    </div>
</template>

<script>
import Gallery from 'common/gallery/index.vue'
import FadeAnimation from 'common/fade/index.vue'

export default {
    name: 'Banner',
    data() {
        return {
            showGallery: false
        }
    },
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    methods: {
        handleClick() {
            this.showGallery = true;
        },
        closeGallery() {
            this.showGallery = false;
        }
    },
    components: {
        Gallery,
        FadeAnimation
    }
}
</script>

<style lang="stylus" scoped> 
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem 
            .banner-number
                padding 0 .4rem
                height .32rem
                margin-top .14rem
                line-height .32rem
                font-size .24rem
                border-border-radius  .2rem
                .banner-icon
                    font-size .24rem
                    margin-right .05rem
</style>


