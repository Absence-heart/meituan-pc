<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
import topBar from './topBar.vue';
import searchBar from './searchBar.vue';
export default {
    components: {
        topBar,
        searchBar
    }
}
</script>
<style lang="scss" >
.el-header {
      background-color: #f8f8f8;
      padding: 0!important;
}
.m-header{
  @at-root .layout-default{
    .el-header{
      .m-header {
        width: 100%;
      }
    }
  }
  >.el-row:nth-child(1){
    width: 1190px;
    margin: 0 auto;
    z-index: 9999;
    height: 40px;
    line-height: 40px;
  }
  >.el-row:nth-child(2){
    background: #fff;
    .search-panel{
      width: 1190px;
      margin: 0 auto;
    }
  }
  >.el-main {
    overflow: unset;
  }
  a {
    text-decoration: none;
  }
}

</style>


