<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
        <li class="item">G</li>
    </ul>
</template>

<script>
export default {
    name: 'Alphabet',
    data () {
        return {
        };
    }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        position absolute
        top 1.58rem
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        width .4rem
        .item
            line-height .4rem
            color $bgColor
            text-align center
</style>