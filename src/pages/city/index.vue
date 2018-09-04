<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
        <alphabet @change="handleChange" :cities="cities"></alphabet>
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
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    mounted() {
        this.getCityInfo()
    },
    methods: {
        getCityInfo: function () {
            axios.get('/api/city.json').then(res => {
                if (res.data.ret && res.data.data) {
                    this.cities = res.data.data.cities;
                    this.hotCities = res.data.data.hotCities;
                }
            });
        },
        handleChange: function (letter) {
            this.letter = letter;
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
