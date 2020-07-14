<template>
  <div id="my-home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @titleClick="titleClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isFix"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" class="home-swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @titleClick="titleClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  import GoodsList from "components/content/goods/GoodsList"
  import scroll from "components/common/scroll/Scroll"

  import HomeSwiper from "views/home/childComps/HomeSwiper"
  import RecommendView from "views/home/childComps/RecommendView"
  import FeatureView from "views/home/childComps/FeatureView";


  import {getHomeMultidata, getHomeGoods} from "@/network/myHome";
  import {debounce} from "@/common/utils";
  import {backTopMixin,tabControlMixin} from "@/common/mixin";

  export default {
    name: "Home",
    components: {
      NavBar,
      GoodsList,
      scroll,

      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    mixins: [backTopMixin,tabControlMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        offsetTop: 44,
        saveY: 0
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();

      // 2.请求商品数据
      this.getHomeGoods("pop");
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      /**
       *  使用防抖动防止refresh刷新次数过多
       *
       */
      const refresh = debounce(this.$refs.scroll.refresh, 500);

      /**
       *  处理BScroll下拉加载更多时出现卡顿的bug
       *  解决方法
       *  一：
       *      1：在main.js中使用Vue.prototype.$bus = new Vue()添加一个事件总线
       *      2：Vue中的img通过@load方法监听图片加载完成，加载完成时，调用this.$bus.$emit('method')发射完成事件
       *      3: 在主页面中调用this.$bus.$on('method'，function)监听该事件
       *      4：在回调函数中调用scroll对象中的refresh方法
       *
       *  二: 使用Vuex管理状态
       */

      //  监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },
    methods: {
      /**
       *   请求数据
       */
      //  1.请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      //  2.请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      },

      /**
       *  监听事件
       */

      //scroll滚动事件位置
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000;

        // 2.决定TabControl是否吸顶
        this.isFix = (-position.y) > this.offsetTop
      },

      //scroll滚动到底部,加载更多
      loadMore() {
        this.getHomeGoods(this.type)
        this.$refs.scroll && this.$refs.scroll.finishPullUp()
      },

      //轮播图加载完成，获取TabBar的距离上方的高度
      swiperImageLoad() {
        debounce(() => {
          this.$refs.scroll.refresh();
        },50)
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.type].list;
      }
    }
  }
</script>

<style scoped lang="scss">
  #my-home {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: $color-tint;
    color: #FFF;
  }

  .tab-control {
    background: white;
    position: relative;
    z-index: 9;
  }

  .home-swiper {
    position: relative;
    margin-top: 44px;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>