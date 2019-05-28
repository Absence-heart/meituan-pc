<template>
    <el-container class="layout-default">
        <el-header height="">
            <m-header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="">
            <m-footer />
        </el-footer>
    </el-container>
</template>

<script>
// @ is an alias to /src
import mHeader from '@/components/header/header.vue'
import mFooter from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components: {
    mHeader,
    mFooter
  }
}
</script>
<style lang="scss">
.el-container .el-main {
    background-color: #f8f8f8;
    overflow: visible;
}
</style>
