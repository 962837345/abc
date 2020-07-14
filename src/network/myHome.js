import {request, requestData} from "@/network/request";


export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return requestData({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}