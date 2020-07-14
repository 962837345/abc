<template>
  <div class="user-info">
    <div class="info-top">
      <img src="~assets/img/profile/polo.jpg" alt=""/>
      <div class="user-name">Kellen</div>
    </div>
    <div class="info-middle">
      <div class="middle-item" v-for="(item,index) in middle" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
    <div class="info-bottom">
      <div class="bottom-item" v-for="(item,index) in bottom" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        middle: [
          {
            title: '积分商城',
            info: '兑换5元优惠券'
          },
          {
            title: '会员中心',
            info: '体验蘑菇会员'
          },
          {
            title: '红包省钱卡',
            info: '领88元红包'
          },
          {
            title: '红包签到',
            info: '天天领红包'
          }
        ],
        bottom: ['我的订单', '我的足迹', '我的收藏', '我的消息'],
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-info {
    height: 100vh;
    background-color: #F2F6FC;
  }

  .info-top {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-tint;
    flex-flow: column;
  }

  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info .user-name {
    font-size: 18px;
    line-height: 20px;
    height: 20px;
    margin-top: 5px;
  }

  .user-info .info-middle {
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    margin: 2%;
    background-color: white;
    text-align: center;
  }

  .info-middle .middle-item {
    padding: 2%;
    margin: 2% 0;
    width: 45%;
  }

  .info-middle .middle-item:nth-child(odd) {
    border-right: 1px solid #DCDFE6;
  }

  .info-middle .middle-item:nth-child(1), .info-middle .middle-item:nth-child(2){

  }

  .middle-item .title{
    font-weight: bold;
    font-size: 14px;
  }

  .middle-item .info{
    font-size: 10px;
    color: $color-high-text;
    margin: 2px 0;
  }


  .user-info .info-bottom {
    margin-top: 10px
  }

  .info-bottom .bottom-item {
    font-size: 14px;
    padding: 10px;
    text-align: center;
    background-color: white;
    margin: 5px 5px;
    border-radius: 5px;
  }
</style>