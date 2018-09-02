<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :citys="citys" :hotCitys="hotCitys"></city-list>
        <alphabet></alphabet>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import Alphabet from './components/Alphabet.vue'
import axios from 'axios'

export default {
    name: 'City',
    data() {
        return {
            citys: {},
            hotCitys: []
        }
    },
    mounted() {
        this.getCityInfo()
    },
    methods: {
        getCityInfo: function () {
            axios.get('/api/city.json').then(res => {
                if (res.data.ret && res.data.data) {
                    this.citys = res.data.data.cities;
                    this.hotCitys = res.data.data.hotCities;
                }
            });
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>
