<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title-icon
        position relative
        left .06rem
        top .16rem
        display inline-block
        width .58rem
        height .58rem
        margin-right .1rem
        background-size 100% 100%
        background url(http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png) no-repeat
    .item-title
        line-height .8rem
        padding 0 .2rem
        font-size .32rem
    .item-children
        padding 0 .2rem
</style>


