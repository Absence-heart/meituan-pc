<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input  placeholder="搜索商家或地点" v-model="searchWord" @focus="focusInput" @blur="blurInput" @input="inputWord"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
                            <router-link  :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                    <!-- <router-link to="/">北京故宫博物院</router-link>
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link  to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link  to="/">故宫珍宝馆</router-link>
                    <router-link  to="/">北京连升商务酒店</router-link>
                    <router-link  to="/">  </router-link> -->
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data() {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: [],
            searchList: [],
            suggestList: []
        }
    },
    created() {
        api.getSearchHotList().then((res) => {
            if (res.data.status == 'success') {
                this.hotPlaceList = res.data.data;
                this.suggestList = res.data.data;
            }
        })
    },
    computed: {
        isHotPlace() {
            return !this.searchWord && this.isFocus;
        },
        isSearchList() {
            return this.searchWord && this.isFocus;
        }
    },
    watch: {
        "$route.params.name": function () {
            this.searchWord = this.$route.params.name;
            console.log(this.searchWord)
        }
    },
    methods: {
        focusInput() {
            this.isFocus = true;
        },
        blurInput() {
            var self = this;
            setTimeout(function() {
                self.isFocus = false;
            }, 200)
        },
        inputWord() {
            api.getSearchList().then((res) => {
                if (res.data.status === 'success') {
                    this.searchList = res.data.data.list.filter((item) => item.indexOf(this.searchWord) > -1);
                }
                console.log(res)
            });
        },
        // inputListClick(item) {
        //     this.searchWord = item
        //     console.log(item)
        // }
    }
}
</script>

<style lang="scss">
.m-header{
  .m-header-searchbar {
      height: 157px;
      padding: 20px 20px;
      background: #fff;
      align-items: start;
      box-sizing: border-box;
      .left {
        width: 280px;
        padding-top: 15px;
        img {
          width: 126px;
          height: 46px;
        }
      }
      .center {
        flex: 1;
        width: auto;
        .wrapper {
          margin-top: 16px;
          border: 1px solid #13D1BE;
          border-radius: 4px;
          width: 552px;
          box-sizing: border-box;
          position: relative;
          white-space: nowrap;
          .el-input {
            width: 462px;
          }
          input {
            border: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .el-button {
            width: 88px;
            border: none;
            background: #13D1BE;
            font-size: 16px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            vertical-align: -1px;
            i {
              font-weight: bold;
            }
          }
          .hotPlace,
          .searchList {
            position: absolute;
            top: 41px;
            left: 0;
            background: #fff;
            padding: 10px;
            font-size: 12px;
            width: 550px;
            box-sizing: border-box;
            border: 1px solid #E5E5E5;
            border-top: none;
            z-index: 999;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;

            dt {
              color: #999;
              font-weight: bold;
            }

            dd {
              display: inline-block;
              color: #666;
              margin-right: 10px;
              margin-bottom: 3px;
              margin-top: 5px;
              cursor: pointer;

              &:hover {
                background: #F8F8F8;
                color: #31BBAC;
              }
            }

            &.searchList {
              padding: 0;
              margin: 0;
              dd {
                margin: 0;
                padding: 3px 10px;
                display: block;
                line-height: 1.6;
              }
            }
          }
        }

        .suggest {
          width: 552px;
          overflow: hidden;
          padding-left: 16px;
          line-height: 14px;
          margin-top: 8px;
          height: 14px;

          a {
            color: #999;
            margin-right: 6px;
            margin-bottom: 3px;
            display: inline-block;
            font-size: 12px;

            &:hover {
              color: #31BBAC;
            }
          }
        }

        .nav {
          list-style: none;
          display: flex;
          margin-top: 25px;

          li {
            font-weight: 700;
            font-size: 16px;
            margin: 0 20px;
            cursor: pointer;
            position: relative;
            &:first-child {
              margin-left: 0;
            }
            a {
              color: #222;

              &:hover {
                color: #f04d4e;
              }

              &.takeout:hover {
                color: #fbc700;
              }

              &.apartment:hover {
                color: #FDC411;
              }

              &.business:hover {
                color: #31BBAC;
              }
            }
          }
        }
      }

      .right {
        text-align: right;
        padding-top: 15px;

        .security {
          li {
            display: inline-block;
            text-align: center;
            padding: 0 5px;
          }

          i {
            font-style: normal;

            &:after {
              font-family: iconfont;
              font-size: 36px;
              color: #13D1BE;
            }
          }

          .refund {
            &:after {
              content: '\e65f';
            }
          }

          .single {
            &:after {
              content: '\e652';
            }
          }

          .overdue {
            &:after {
              content: '\e65e';
            }
          }

          .txt {
            color: #999;
            font-size: 12px;
            line-height: 1;
            margin: 0;
            text-align: center;
          }
        }
      }
    }
}

</style>
