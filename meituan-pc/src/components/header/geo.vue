<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            北京
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
               <a href=“#>天津</a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.user">
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
        <div class="m-user" v-else>
             <router-link class="login" :to="{name: 'user'}">{{$store.state.user}}</router-link>
            <router-link class="register" :to="{name: 'exit'}">推出</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.m-geo {
    color: #666;
    font-size: 12px;
    .position,
    .m-user {
      display: inline-block;
    }
    .changeCity {
      background: #F4F4F4;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
      &:hover {
        color: #31BBAC;
      }
    }
    .username {
      color: #31BBAC;
      cursor: pointer;
    }
    .login,
    .register {
      font-size: 12px;
      line-height: 40px;
      color: #999;
      margin: 0 5px;
      &.login {
        color: #31BBAC;
        margin: 0 5px 0 20px;
      }
      &:hover {
        color: #31BBAC;
      }
    }
  }
</style>


