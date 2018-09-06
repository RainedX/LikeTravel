<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item in letters" 
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="hanldeTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Alphabet',
    data () {
        return {
            flag: false,
            startAlphabet: 'A',
            startIndex: 0
        };
    },
    props: {
        cities: Object
    },
    computed: {
        letters() {
            const letters = [];
            for (const key in this.cities) {
              letters.push(key)
            }

            return letters
        }
    },
    methods: {
        handleLetterClick: function(e) {
            this.$emit('change', e.target.innerText);
        },
        hanldeTouchStart: function (e) {
            this.flag = true;
            this.startAlphabet = e.target.innerText;
            this.startIndex = this.letters.indexOf(e.target.innerText);
            this.$emit('change', e.target.innerText);
        },
        handleTouchMove: function (e) {
            if (this.flag) {
                const startY = this.$refs[this.startAlphabet][0].offsetTop;
                const touchY = e.touches[0].clientY - 74;
                const length = Math.floor((touchY - startY) / 20);
                if (this.startIndex + length >= 0 && this.startIndex + length < 26) { 
                    this.$emit('change', this.letters[this.startIndex + length]);
                }
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