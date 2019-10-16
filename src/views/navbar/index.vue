<template>
  <div class="navbar">
    <div class="m-header">
      <div class="icon"></div>
      <h1 class="text">Flyyy Music</h1>
      <router-link tag="div" class="mine" to="/user">
        <i class="icon-mine"></i>
      </router-link>
    </div>
    <div class="tab">
      <van-tabs v-model="active" background="#222" :border="false" title-active-color="#ffcd32">
        <van-tab title="推荐" class="tab-item" to="/recommend"></van-tab>
        <van-tab title="歌手" class="tab-item" to="/singer"></van-tab>
        <van-tab title="排行" class="tab-item" to="/rank"></van-tab>
        <van-tab title="搜索" class="tab-item" to="/search"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/variable.styl';
@import '../../assets/stylus/mixin.styl';

.navbar{
  height: 100%;
  // position: fixed;
  width: 100%;
  background-color: #222
}
.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;

  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    bg-image('logo');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }

  .mine {
    position: absolute;
    top: 0;
    right: 0;

    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 20px;
      color: $color-theme;
    }
  }
}

.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  color: $color-theme;
  margin-bottom: 10px;
  .van-tabs {
    width: 100%;
  }
}

.tab /deep/ .van-tabs__line {
  background-color: $color-theme;
}
</style>