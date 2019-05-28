<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>

          <p class="m-life-login-name">{{$store.state.user ? $store.state.user: 'Hi,你好'}}</p>
          <p v-if="!$store.state.user">
            <router-link :to="{name: 'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!$store.state.user">
            <router-link :to="{name: 'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        
            <div v-else class="item clearfix">
              <div class="fn-item">
                <a href="https://www.meituan.com/orders/ " target="_blank">
                  <div class="icon">
                    <i class="el-icon-document"></i>
                  </div>
                  <p class="fn-name">我的订单</p>
                </a>
              </div>
              <div class="fn-item">
                <a href="https://www.meituan.com/collections/" target="_blank">
                  <div class="icon">
                    <i class="el-icon-star-on"></i>
                  </div>
                  <p class="fn-name">我的收藏</p>
                </a>
              </div>
              <div class="fn-item">
                <a href="https://www.meituan.com/vouchers/" target="_blank">
                  <div class="icon">
                    <i class="el-icon-tickets"></i>
                  </div>
                  <p class="fn-name">抵用券</p>
                </a>
              </div>
              <div class="fn-item">
                <a href="https://www.meituan.com/orders/ " target="_blank">
                  <div class="icon">
                    <i class="el-icon-document"></i>
                  </div>
                  <p class="fn-name">我的订单</p>
                </a>
              </div>
              <div class="fn-item">
                <a href="https://www.meituan.com/collections/" target="_blank">
                  <div class="icon">
                    <i class="el-icon-star-on"></i>
                  </div>
                  <p class="fn-name">我的收藏</p>
                </a>
              </div>
            </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">1元起</span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from "./slider.vue";
export default {
  components: {
    Slider
  }
};
</script>
<style lang="scss">
.m-life{
  .nav {
    list-style: none;
    display: flex;
    margin-top: -45px;
    margin-left: 50px;
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
        text-decoration: none;
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
    .m-life-pic{
        margin:10px 10px 10px 0px;
        width:150px;
        height:240px;
        background:url(//p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
        background-size:150px;
    }
    .m-life-login{
        margin:10px 0 10px 0;
        box-sizing:border-box;
        height:240px;
        background:#fff;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:30px;

        .m-life-login-name {
          margin-bottom: 10px;
        }
        button{
          width: 118px;
          margin: 5px;
        }
        h4 {
          img {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 4px solid #E5E5E5;
          }
        }

        p>button {
          width: 120px;
          margin-bottom: 15px;
        }

        .item {
          width: 100%;
          text-align: center;
          .fn-item {
            float: left;
            width: 33.33%;
            .iconfont {
                color: #96E4DA;
                font-size: 20px;
            }
            .icon-ticket_iconx:before {
                content: "\e630";
            }
            .fn-name {
                font-size: 12px;
                color: #222;
                margin: 5px 0;
            }
          }
        }
    }
    .m-life-hotel,
    .m-life-music {
      height: 165px;
      background:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
      background-size: 270px;
      background-position: 50%;
      background-repeat: no-repeat;
      margin-right: 10px;
      margin-left: 10px;
    }

    .m-life-music {
      background: url(//p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
      margin-left:0;
    }

    .m-life-coop {
      background: url(//p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
      width: 150px;
      height: 165px;
      background-size: 150px;
    }
    .m-life-downapp{
        background:#fff;
        height:165px;
        text-align:center;

        img {
          width: 95px;
          height: 95px;
          margin-top: 10px;
        }

        p {
          font-size: 16px;
          color: #222;
          font-weight: 500;
        }

        .last-p {
          font-size: 12px;
          font-weight: 500;
          margin-top: 2px;

          span {
            color: #EC5330;
            margin-right: 5px;
          }

          em {
            color: #3f3f3f;
            font-style: normal;
          }
        }
    }
}
</style>

