import axios from '@/axios'

const api = {
    getCityList: params => axios.get('/meituan/city/cityList.json', params),
    getSearchHotList: params => axios.get('/meituan/header/searchHotWords.json', params),
    getProvinceList: params => axios.get('/meituan/city/province.json', params),
    getHotCity: params => axios.get('/meituan/city/hot.json', params),
    getRecentCity: params => axios.get('/meituan/city / recents.json',params),
    getSearchList: params => axios.get('/meituan/header/search.json',params),
    getMenuList: params => axios.get('/meituan/index/nav.json',params),
    resultsByKeywords: params => axios.get('/meituan/index/resultsByKeywords.json',params),
    getProducts: params => axios.get('/meituan/list/goodsList.json',params),
    login: params => axios.get('/meituan/login', params ),
}

export default api

