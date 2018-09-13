<template>
    <div class="list" ref="list">
      <div class="content">
            <div class="area">
            <h2 class="title border-topbottom">当前城市</h2>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <h2 class="title border-topbottom">热门城市</h2>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                    <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
                </div>
            </div> 
        </div>
        <div class="area" v-for="(innerList, key) in cities" :key="key" :ref="key">
            <h2 class="title border-topbottom">{{key}}</h2>
            <div class="item-list">
                <div
                    @click="handleCityClick(item.name)"
                    class="item border-bottom"
                    v-for="item in innerList"
                    :key="item.id"
                >
                {{item.name}}
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'List',
    data () {
        return {
        };
    },
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.list)
    },
    watch: {
        letter: function () {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
    methods: {
        handleCityClick(name) {
            this.changeCity(name);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
    .title
        line-height .54rem
        background #eee
        color #666
        font-size .26rem
        padding-left .2rem
    .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
            float left
            width 33.33%
            .button
                padding .1rem
                text-align center
                border .02rem solid #ccc
                margin .1rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
        .border-bottom
            &:before
                border-color #ccc
</style>