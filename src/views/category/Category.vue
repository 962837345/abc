<template>
  <div class="category">
    <nav-bar class="nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @titleClick="titleClick"
                 ref="tabControl1"
                 class="tab"
                 v-show="isFix"></tab-control>
    <div class="content">
      <tab-menu :menu-list="categories" @itemClick="itemClick"></tab-menu>
    </div>
    <scroll id="tab-content"
            :data="[categoryData]"
            :probe-type="3"
            @scroll="contentScroll"
            ref="scroll">
      <tab-content-category :subcategories="showSubcategory"></tab-content-category>
      <tab-control :titles="['流行','新款','精选']"
                   @titleClick="titleClick"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="showCategoryDetail"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import {getCategory, getSubcategory, getCategoryDetail} from "@/network/category";
  import {debounce} from "@/common/utils";
  import {backTopMixin,tabControlMixin} from "@/common/mixin.js"

  import TabMenu from "views/category/childComps/TabMenu";
  import NavBar from "@/components/common/navBar/NavBar";
  import TabContentCategory from "@/views/category/childComps/TabContentCategory";
  import scroll from "@/components/common/scroll/Scroll";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop"


  export default {
    name: "Category",
    mixins: [backTopMixin,tabControlMixin],
    components: {
      GoodsList,
      TabControl,
      scroll,
      TabContentCategory,
      NavBar,
      TabMenu,
      BackTop
    },
    data() {
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1,
      }
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.type]
      }
    },
    mounted() {
      /**
       *  使用防抖动防止refresh刷新次数过多
       *
       */
      const refresh = debounce(this.$refs.scroll.refresh, 500);

      //  监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })

    },
    created() {
      this._getCategory();
    },
    methods: {
      /**
       *   发送请求
       */
      //  1.获取商品分类数据
      _getCategory() {
        getCategory().then(res => {
          this.categories = res.data.category.list

          //  2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }

          //  3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },

      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       *  事件监听
       */
      //  菜单栏点击事件
      itemClick(index) {
        this._getSubcategories(index)
      },

      //scroll滚动事件位置
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000;

        // 2.决定TabControl是否吸顶
        this.isFix = (-position.y) > this.$refs.tabControl2.$el.offsetTop
      },
    }
  }
</script>

<style scoped lang="scss">
  .category {
    height: 100vh;
  }

  .nav {
    background-color: $color-tint;
    color: #FFF;
    z-index: 9;
  }

  .category .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
  }

  #tab-content {
    height: calc(100% - 44px - 49px);
    flex: 1;
    margin-left: 100px;
    overflow: hidden;
    position: relative;
  }

  .tab {
    background: white;
    position: relative;
    z-index: 9;
    margin-left: 100px;
  }
</style>