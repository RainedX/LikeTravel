<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    @click="handleCityClick(item.name)"
                    class="search-item border-bottom" 
                    v-for="item in list" 
                    :key=item.id>{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">没有匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        };
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer);
            }

            if (!this.keyword) {
                this.list = [];
                return;
            }

            this.timer = setTimeout(() => {
                const result = [];
                
                for (const key in this.cities) {
                   this.cities[key].forEach(value => {
                       if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                           result.push(value);
                       }
                   });
                }
                this.list = result;
            }, 100);
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.search);
    },
    methods: {
        handleCityClick(city) {
            this.$store.commit('changeCity', city);
            this.$router.push('/');
        }
    }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height .72rem
        padding 0 .1rem
        background-color $bgColor
        .search-input
            box-sizing border-box
            padding 0 .1rem
            width 100% 
            height .62rem
            line-height .62rem
            border-radius .06rem
            color #666
    .search-content
        z-index 1
        position absolute
        overflow hidden
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>