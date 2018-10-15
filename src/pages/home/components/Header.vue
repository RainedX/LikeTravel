<template>
    <div class="header">
        <div class="header-left">
            首页
        </div>
        <div class="header-input">
            <i class="iconfont icon-sousuo"></i> 输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">{{this.$store.state.city}}<i class="iconfont icon-jiantou"></i></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'HomeHeader',
    data () {
        return {
        };
    },
    computed: {
        ...mapState(['city'])
    }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display flex
        color #fff
        line-height .76rem
        background $bgColor
        .header-left
            padding-left .2rem
            line-height .92rem
            width .64rem
        .header-input
            flex 1
            margin .12rem 0 .12rem .2rem
            background-color #fff
            border-radius .1rem
            color #ccc
            .icon-sousuo
                margin-left .05rem
        .header-right
            color #fff
            float right
            min-width 1.04rem
            padding .1rem 
            text-align center
            .icon-jiantou 
                margin-left .04rem
</style>