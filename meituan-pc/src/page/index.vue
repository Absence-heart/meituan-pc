<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="recomment"/>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/live.vue'
import Container from '@/components/index/container.vue'
export default {
    data() {
        return {
            iStyle: {
                class: 'istyle',
                title: '有格调',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '约会聚餐',
                    tab: 'food'
                }, {
                    text: '丽人SPA',
                    tab: 'spa'
                }, {
                    text: '电影演出',
                    tab: 'movie'
                }, {
                    text: '品质出游',
                    tab: 'travel'
                }]
            },
            recomment: {
                class: 'youhui',
                title: '很优惠',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '美食',
                    tab: 'food'
                }, {
                    text: '休闲',
                    tab: 'xiuxian'
                }]
            }
        }
    },
    created() {

    },
    components: {
        MMenu,
        MLife,
        Container,
    }
}
</script>
<style lang="scss">
.page-index{
    width: 1190px;
    margin: 0 auto;
    .m-menu {
      width: 230px;
      height: 485px;
      box-sizing: border-box;
      margin-top: -60px;
      margin-left: 20px;
      color: #FFF;
      position: relative;
      background: linear-gradient(-180deg, rgba(2, 181, 157, .85) 2%, rgba(22, 146, 183, .85) 100%);
      dt {
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        margin-left: 15px;
        margin-bottom: 10px;
      }

      dd {
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        height: 26px;
        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, .2);

          &>i {
            opacity: 1;
          }
        }
      }

      .nav {
        font-size: 13px;
        dd>i {
          font-family: 'meituan';
          font-size: 14px;
          font-style: normal;
          opacity: 0.3;
          margin-right: 11px;

          &:before {
            width: 14px;
            height: 14px;
            display: inline-block;
          }
        }

        .food {
          &:before {
            content: "\e622";
          }
        }

        .takeout {
          &:before {
            content: "\e630";
          }
        }

        .hotel {
          &:before {
            content: "\e62a";
          }
        }

        .homestay {
          &:before {
            content: "\e631";
          }
        }

        .movie {
          &:before {
            content: "\e62c";
            position: relative;
            left: -2px;
          }
        }

        .airport {
          &:before {
            content: "\e632";
          }
        }

        .ktv {
          &:before {
            content: "\e627";
          }
        }

        .life {
          &:before {
            content: "\e633";
          }
        }

        .hair {
          &:before {
            content: "\e626";
            transform: scale(0.7);
          }
        }

        .marry {
          &:before {
            content: "\e629";
          }
        }

        .offspring {
          &:before {
            content: "\e623";
          }
        }

        .sport {
          &:before {
            content: "\e62b";
          }
        }

        .furniture {
          &:before {
            content: "\e625";
          }
        }

        .study {
          &:before {
            content: "\e624";
          }
        }

        .health {
          &:before {
            content: "\e628";
          }
        }

        .bar {
          &:before {
            content: "\e621";
          }
        }

        .arrow {
          width: 4px;
          height: 4px;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }

      .detail {
        padding: 0 30px;
        position: absolute;
        left: 230px;
        bottom: 0;
        width: 400px;
        height: 416px;
        background: #fff;
        z-index: 9999;

        h4 {
          font-size: 16px;
          font-weight: 500;
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;
          color: #222;
        }

        span {
          color: #999;
          font-size: 12px;
          line-height: 15px;
          display: inline-block;
          margin-right: 16px;
          margin-top: 10px;
          cursor: pointer;

          &:hover {
            color: #31BBAC;
          }
        }
      }
    }
    .slide {
      height: 240px;
      // width: 540px;
      margin: 10px;

      img {
        height: 240px;
      }
    }
}

.m-header {
  .search-panel {
    padding-bottom: 35px;
  }
}    
</style>


