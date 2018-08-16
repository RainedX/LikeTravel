<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
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
            city: "北京",
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        };
    },
    methods: {
        getHomeInfo: function () {
            axios.get('/api/index.json').then((res) => { 
                let response = res.data;           
                if (response.ret) {
                    this.city = response.data.city;         
                    this.swiperList = response.data.swiperList;
                    this.iconList = response.data.iconList;
                    this.recommendList = response.data.recommendList;
                    this.weekendList = response.data.weekendList;
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