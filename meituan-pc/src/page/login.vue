<template>
    <div class="page-login">
        <div class="login-header">
            <a class="site-logo logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <p>
                    <span>账号登录</span>
                </p>
                <el-input v-model="username" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input v-model="password" placeholder="手机号/用户名/邮箱" prefix-icon="password" type="password"></el-input>
                <div class="foot">
                    <router-link :to="{name: 'forget'}" target="blank">忘记密码?</router-link>
                </div>
                <el-button class="btn-login" type="success" @click="submit">登录</el-button>
                <p class="signup-guide">还没有账号？<a href="blank">免费注册</a></p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" target="_blank"></a>
                        <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submit() {
            api.login({
                userName: this.username,
                password: this.password
            }).then(res => {
                console.log(res);
                if (res.data.status == 'success') {
                    this.$store.dispatch('setUser', this.username);
                    this.$router.push({name:'index'})
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .page-login{
    .login-header {
      position: relative;
      width: 980px;
      height: auto;
      margin: 40px auto 30px;
      .logo {
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png);
        background-position: 0 !important;
        background-size: contain !important;
        width: 82px;
        height: 54px;
        display: block;
      }
    }
    .login-panel {
      margin: 0 auto 70px;
      width: 980px;
      display: flex;
      .banner {
        margin-right: 115px;
      }
      .form {
        display: flex;
        flex-direction: column;
        width: 270px;
        .tips {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #f5d8a7;
          border-radius: 2px;
          background: #fff6db;
          font-size: 12px;
          padding-left: 26px;
          >i {
            position: relative;
            &:after {
              position: absolute;
              display: inline-block;
              width: 17px;
              height: 17px;
              font-family: iconfont;
              font-style: normal;
              content: "\e64d";
              font-size: 28px;
              top: -9px;
              left: -24px;
            }
          }
        }
        em {
          font-style: normal;
          float: right;
        }
        .reg {
          padding-top: 10px;
        }
        .signup-guide {
          font-size: 14px;
        }
        .oauth-wrapper {
            margin-top: 20px;
            font-size: 12px;
            .title-wrapper {
              position: relative;
              margin-bottom: 30px;
              border-bottom: 1px solid #CCC;
              width: 100%;
              height: 0;
              overflow: visible;
              .title {
                position: absolute;
                top: -10px;
                left: 50%;
                margin-left: -75px;
                width: 150px;
                text-align: center;
                font-size: 14px;
                font-weight: 400;
                color: #666;
                background: #FFF;
              }
            }
            .oauth {
              padding-left: 88px;
            }
            .oauth__link {
              float: left;
              margin-right: 20px;
              width: 18px;
              height: 18px;
              background-position: -1250px -491px;
              background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
            }
            .oauth__link--weibo {
              width: 18px;
              height: 18px;
              background-position: -1250px -599px;
              background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
            }
           
        }

      }

      .el-input {
        margin-top: 10px;
      }

      .foot {
        margin-top: 10px;
        a {
          float: right;
          font-size: 12px;
          text-decoration: none;
        }

      }

      .el-input__icon {
        &.profile {
          &:after {
            font-family: iconfont;
            content: "\e627";
            font-style: normal;
            top: -1px;
            left: 5px;
            position: absolute;
          }
        }

        &.password {
          &:after {
            font-family: iconfont;
            content: "\E600";
            font-style: normal;
            top: -1px;
            left: 3px;
            position: absolute;
            font-size: 18px;
          }
        }
      }

      .btn-login {
        margin: 10px 0;
        color: #fff;
        background-color: #2db3a6;
        border: none;
        padding: 12px 15px;
      }
    }
    footer {
      width: 980px;
      margin: 0 auto 30px;
      text-align: left;
      ul {
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
        padding: 12px 0;
        color: #ddd;
        li {
          display: inline-block;
          font-size: 13px;
          text-align: center;
          &:not(:last-child) {
            border-right: 1px solid #eee;
          }
          a {
            font-size: 13px;
            color: #999;
            &:hover {
              text-decoration: underline;
            }
            padding-right: 10px;
            &:not(.first) {
              padding-left: 10px;
            }
          }
          
        }
      }
      >p {
        margin: 10px 0;
        font-size: 13px;
        color: #999;
      }
    }
}

</style>
