<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList" :hasData="hasData"></home-swiper>
        <home-icons :iconList="iconList" :hasData="hasData"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeWeekend from './components/Weekend.vue'
import HomeRecommend from './components/Recommend.vue'
import axios from 'axios'

export default {
    name: 'Home',
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            hasData: false
        };
    },
    methods: {
        getHomeInfo: function () {
            axios.get('/api/index.json').then((res) => { 
                let response = res.data;           
                if (response.ret) {        
                    this.swiperList = response.data.swiperList;
                    this.iconList = response.data.iconList;
                    this.recommendList = response.data.recommendList;
                    this.weekendList = response.data.weekendList;

                    this.hasData = true; //解决异步数据渲染swiper时，loop失效
                }
            })
        }
    },
    mounted () {
        this.getHomeInfo();
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeWeekend,
        HomeRecommend
    }
}

</script>
<style scoped>

</style>