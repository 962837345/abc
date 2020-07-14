<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @currentIndex="getIndex" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="getScrollY" :probe-type="3">
      <detail-swiper :topImages=topImages></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "views/detail/childComps/DetailBottomBar"

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "@/network/detail";
  import {debounce} from "@/common/utils";
  import {backTopMixin} from "@/common/mixin";

  import Scroll from "@/components/common/scroll/Scroll";


  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    mixins:[backTopMixin],
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        goodsParam: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        currentIndex: 0
      }
    },
    created() {
      //获取商品iid
      this.iid = this.$route.params.iid

      //根据iid获取详情数据
      getDetail(this.iid).then((res) => {
        //  1.获取顶部的轮播图片
        const data = res.result
        this.topImages = data.itemInfo.topImages;

        //  2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //  3.获取商家信息
        this.shop = new Shop(data.shopInfo)

        //  4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //  5.保存商品的参数信息
        this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //  6.获取评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }

        //  获取offsetTop，进行防抖
        this.getThemeTopY = debounce(() => {
          this.themeTopY = [];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.param.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
          this.themeTopY.push(Number.MAX_VALUE)
        }, 50)
      });

      //获取商品推荐数据
      getRecommend().then((res) => {
        this.recommends = res.data.list
      });


    },
    methods: {
      //监听商品详情图片加载完成
      imageLoad() {
        this.$refs.scroll.refresh();
        //调用获取的offsetTop
        this.getThemeTopY();
      },
      //获得顶部菜单栏index  44为菜单栏height，需要减去该部分高度
      getIndex(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index] + 44);
      },
      //  获取滚动当前Y值
      getScrollY(position) {
        //  通过当前Y值判断显示顶部菜单栏
        let y = -position.y;
        for (let i = 0; i < this.themeTopY.length; i++) {
          if (y >= this.themeTopY[i] - 44 && y < this.themeTopY[i + 1] - 44) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
            }
          }
        }

        // 判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000;
      },
      //加入购物车
      addToCart(){
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.realPrice = this.goods.realPrice;
        product.iid = this.iid;
        this.$store.commit('addCart',product)
        this.$toast.show('已添加至购物车',2000)
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: relative;
    height: calc(100% - 44px - 49px);
  }
</style>