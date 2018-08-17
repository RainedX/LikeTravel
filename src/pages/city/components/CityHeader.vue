<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <i class="iconfont icon-fanhui"></i>
            </div>
        </router-link>
        <div class="header-content">
            城市选择
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
        };
    }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
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