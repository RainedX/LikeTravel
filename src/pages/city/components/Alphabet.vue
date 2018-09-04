<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="(item ,key) in cities" 
            :key="key"
            @click="handleLetterClick"
            @touchstart="hanldeTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
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
            flag: false
        };
    },
    props: {
        cities: Object
    },
    methods: {
        handleLetterClick: function(e) {
            this.$emit('change', e.target.innerText);
        },
        hanldeTouchStart: function (e) {
            this.flag = true;
        },
        handleTouchMove: function () {
            if (this.flag) {
                
            }
        },
        handleTouchEnd: function () {
            this.flag = false;
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