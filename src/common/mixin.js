import BackTop from "components/content/backTop/BackTop"
import TabControl from "components/content/tabControl/TabControl"

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    //回到顶部按钮点击事件
    backClick() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0)
    },
  }
}

export const tabControlMixin = {
  components: {
    TabControl
  },
  data() {
    return {
      type: 'pop',
      isFix:false,

    }
  },
  methods: {
    //监听TabControl事件
    titleClick(index) {
      switch (index) {
        case 0:
          this.type = 'pop';
          break;
        case 1:
          this.type = 'new';
          break;
        case 2:
          this.type = 'sell';
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
  }
}