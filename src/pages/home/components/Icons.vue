<template>
    <div class="icons" v-if="hasData">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(itemList, index) in pages" :key="index">
                <div class="icon" v-for="item in iconList" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-content">
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        swiperOption: {
            autoplay: false,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
                bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
                hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
                clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
            },
        }
    };
  },
  props: {
        iconList: Array,
        hasData: Boolean
    },
  computed: {
      pages () {
          const pages = [];
          this.iconList.forEach((item, index) => {
              const page = Math.floor(index / 8);

              if (!pages[page]) {
                  pages[page] = [];
              }
              pages[page].push(item);
          });

          return pages;
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons .swiper-pagination-bullets
    bottom 0
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons
    margin-top: 0.1rem
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img 
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0.5rem
            box-sizing: border-box
            padding: 0.1rem
            .icon-img-content 
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc 
            position: absolute
            left: 0
            right: 0
            bottom: -0.35rem
            line-height: 0.44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>