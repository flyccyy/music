<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <van-swipe :autoplay="3000" loop >
          <van-swipe-item v-for="(item, index) in bannerList" :key="index">
            <img v-lazy="item.pic" width="100%"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <van-list
          v-model="recommendLoading"
          :finished="recommendFinished"
          finished-text="没有更多了"
          @load="recommendOnLoad"
        >
          <van-cell v-for="item in songsList" :key="item.id" :border="false">
            <template slot="title">
              <div class="songs-desc">
                <div class="songs-img">
                  <img :src="item.coverImgUrl" alt width="60" height="60" />
                </div>
                <div class="songs-content">
                  <p class="title">{{item.copywriter}}</p>
                  <p class="desc">{{item.name}}</p>
                </div>
              </div>
            </template>
          </van-cell>
          
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner, getSongs } from '@/api/recommend.js'
import { ERR_OK } from '@/api/config.js'
export default {
  data() {
    return {
      recommendLoading: false,
      recommendFinished: false,
      bannerList: [],
      songsList: [],
      isFirst:0,
      
    }
  },
  created() {
    this.getBanner()
  },
  methods: {
    //获取轮播图
    async getBanner() {
      let res = await getBanner(2)
      console.log(res)
      this.bannerList = res.data.banners
    },
    //获取热门歌单推荐
   async getSongs() {
      if(this.isFirst===0){
        let res = await getSongs({
          limit: 20,
          before: Date.now()
        })
        console.log(res)
        this.songsList = res.data.playlists
        this.isFirst = res.data.playlists[0].updateTime
      this.recommendLoading = false
      }else {
         let res = await getSongs({
          limit: 20,
          before: this.isFirst
        })
        this.songsList = [...this.songsList,...res.data.playlists]
      }
    },
    async recommendOnLoad() {
          let res = await getSongs({
          limit: 20,
          before: Date.now()
        })
        console.log(res)
        this.songsList = res.data.playlists
        this.recommendFinished = true
        this.recommendLoading = false
    },
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/variable.styl';

.recommend {
  height: 100%;
  // position: fixed;
  // width: 100%;
  // top: 100px;
  // bottom: 0;

  .recommend-content {
    height: 100%;
    // overflow: hidden;
    background-color: #222;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      height: 164px;
    }

    .recommend-list {
      background-color: #222;

      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .van-list {
        background-color: #222;
        height :2000px;
      }

      .songs-desc {
        display: flex;

        .songs-img {
          margin-right: 20px;
        }

        .songs-content {
          margin-top: 5px;
          .title{
            color:#fff;
          }
          .desc{
            color:#626262;
          }
        }
      }
    }
  }
}

.recommend /deep/ .van-cell {
  background-color: #222;
}
</style>