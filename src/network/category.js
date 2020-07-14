import {requestData} from "@/network/request";

export function getCategory() {
  return requestData({
    url: '/category',
  })
}

export function getSubcategory(maitKey) {
  return requestData({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return requestData({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}