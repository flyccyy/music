<template>
  <div class="singer-wrap">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="(item,index) in singerList"
    :key="index" :border="false"
    
  >
    <template slot="title">
      <div>
        <img :src="item.picUrl" alt="" width="50" height="50">
        <span>{{item.name}}</span>
      </div>
    </template>
  </van-cell>
</van-list>
  </div>
</template>

<script>
import {getSingers} from '@/api/singer.js'
import {getSingerList} from '@/api/singer'
export default {
 data() {
    return {
      list: [],
      loading: false,
      finished: false,
      singerList:[]
    }
},
created(){
  //  this._getSingerList()
},
methods:{
//  _getSingerList() {
//         getSingerList().then((res) => {
//           if (res.code === ERR_OK) {
//             // this.singers = this._normalizeSinger(res.data.list)
//             console.log(res)
//           }
//         })
//       },
  onLoad() {
      getSingers().then(res=>{
     console.log(res)
     this.singerList = res.data.list.artists
     this.loading = false,
     this.finished = true
   })
     }
}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer-wrap{
  .van-cell{
    background-color:#222;

  }
}
</style>