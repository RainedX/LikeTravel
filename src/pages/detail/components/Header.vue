<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="header-abs-back">返回</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="header-left">
                    <i class="iconfont icon-fanhui"></i>
                </div>
            </router-link>
            <div class="header-content">
                景点详情
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            const scrollValue = document.documentElement.scrollTop;

            if (scrollValue > 60) {
                let opacity = scrollValue / 140;
                opacity = (opacity > 1 ? 1 : opacity);
                this.opacityStyle = { opacity };
                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
        }
    },
    activated() {
       window.addEventListener('scroll', this.handleScroll); 
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        color #fff
        background rgba(0, 0, 0, 0.6)
    .header-fixed
        z-index 2 
        position fixed
        left 0
        top 0
        right 0
        display flex
        color #fff
        line-height .86rem
        background $bgColor
        .header-left
            color #fff
            float left
            width .64rem
            .icon-fanhui
                display block
                font-size .4rem
                text-align center 
        .header-content
            position absolute
            left 50%
            transform translateX(-50%)
            line-height .86rem
            font-size 0.35rem
</style>


