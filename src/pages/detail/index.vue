<template>
    <div>
       <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
       <detail-header></detail-header>
       <div class="content">
           <detail-list :list="list"></detail-list> 
       </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default {
    name: 'Detail',
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        handleReponse(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.list = data.categoryList;
            }
        },
        getDetailInfo() {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleReponse);
        }   
    },
    mounted() {
        this.getDetailInfo();
    },
    components: {
        Banner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="postcss" scoped>

</style>


