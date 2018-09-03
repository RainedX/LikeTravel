<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="(item ,key) in citys" 
            :key="key"
            @click="handleLetterClick"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Alphabet',
    data () {
        return {
        };
    },
    props: {
        citys: Object
    },
    methods: {
        handleLetterClick: function() {
            
        }
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