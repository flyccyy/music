//通过jsonp获取recommend的数据
//导入jsonp.js
// import jsonp from '@/assets/js/jsonp.js'
// import {commonParams,options} from '@/api/config.js'
// export function getRecommend(){
//     const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//     const data = Object.assign({}, commonParams, {
//         platform: 'h5',
//         uin: 0,
//         needNewCode: 1
//       })
//       return jsonp(url,data,options)
// }

import request from '@/utils/axiosreq.js'
//获取轮播图数据
function getBanner(type){
  return request({
    url:'/banner',
    params:{
      type
    }
  })
}
//获取歌单推荐
function getSongs({limit,before}){
  return request({
    url:'/top/playlist/highquality',
    params:{
      limit,
      before
    }
  })
}
export {getBanner,getSongs}