<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info" v-if="item.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div>
            <div class="price-info">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price}}</span>
                    <span class="units">/人均</span>
                </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/api.js'
export default {
  data() {
    return {
      kind: "all",
      list: {}
    };
  },
  props: ["nav"],
  created() {
    api.resultsByKeywords().then((res) => {
        this.list = res.data.data;
        console.log(this.list,1)
    })
  },
  methods: {
    over(e) {
    //   console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据  ajax请求
    }
  }
};
</script>
<style lang="scss">
.m-istyle {
  margin-left: 20px;
  margin-top: 40px;

  dl {
    height: 44px;
    line-height: 44px;
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    display: flex;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    &.istyle {
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    }
    &.youhui {
      background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);
    }
    dt {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
      padding: 0 5px;
    }

    dd {
      padding: 0 5px;
      position: relative;

      &:after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
      }

      &.active:after {
        display: block;
      }
    }
  }

  .ibody {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    >li {
      width: 33.3%;
      height: 314px;
      padding:5px 10px;
      box-sizing: border-box;
      float: left;
      background: #fff;
      transition: background-color .5s;
      height: 314px;

      .el-card {
        width: 100%;
        height: 100%;
        border: none;
        overflow: visible;
        background-color: transparent;
        img {
          max-width: 100%;
          width: 100%;
          height: 208px;
          margin-bottom: 11px;
          cursor: pointer;
        }

        .el-card__body {
          .cbody {
            list-style: none;

            .title {
              font-size: 16px;
              color: #222;
              height: 22px;
              line-height: 22px;
              margin-bottom: 8px;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }
            .sub-title {
              font-size: 12px;
              color: #999;
              line-height: 18px;
              height: 18px;
              margin-bottom: 7px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price-info {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              display: inline-block;
              .price-symbol {
                  font-size: 14px;
                  color: #BE9E4D;
                  font-weight: 500;
              }
              .current-price {
                  font-size: 12px;
                  color: #BE9E4D;
                  margin-right: 6px;
                  letter-spacing: -.8px;
                  cursor: pointer;
              }
              .old-price {
                  font-size: 12px;
                  color: #999;
                  text-decoration: line-through;
              }
              .sold {
                font-size: 12px;
                color: #999;
                float: right;
                margin-top: 10px;
              }
              .units {
                color: #BE9E4D;
                cursor: pointer;
                font-size: 12px;
              }
            }
            .pos {
              font-size: 12px;

              span {
                height: 18px;
                line-height: 18px;
                text-align: center;
                border: 1px solid #d8d8d8;
                border-radius: 2px;
                margin-right: 10px;
                margin-bottom: 5px;
                padding: 0 3px;
              }
            }

            .price {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              font-size: 14px;
              color: #BE9E4D;
              font-weight: 500;

              em {
                font-size: 22px;
                color: #BE9E4D;
                margin-right: 6px;
                letter-spacing: -.8px;
                cursor: pointer;
                font-style: normal;
              }

              span {
                font-size: 12px;
                letter-spacing: -.6px;
              }
            }
          }
        }
      }

      &:hover {
        background: #F4F4F4;
        transition: background-color .5s;
        border-radius: 4px;
      }
    }
  }
}

</style>

