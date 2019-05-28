<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from './item.vue'
import api from '@/api/api.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  created() {
    api.getProducts().then((res) => {
      if (res.data.status == 'success') {
        this.productList = res.data.data
        // console.log(this.productList)
      }
    })
  },
  components: {
      Item
  }
};
</script>

<style lang="scss">
.m-products-list {
    box-sizing: border-box;
    margin-top: 10px;
    background: #FFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 20px;

    >dl {
      dd {
        width: 96px;
        height: 20px;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;

        &.s-nav-active {
          color: #31BCAD;
        }
      }

      padding-bottom: 2px;

      .s-price {
        position: relative;

        &:before,
        &:after {
          content: " ";
          position: absolute;
          right: 8px;
          top: 0;
          border: 4px solid transparent;
          border-bottom-color: #ddd;
          width: 0;
          height: 0;
        }

        &:after {
          top: 12px;
          border-bottom-color: transparent;
          border-top-color: #ddd;
        }
      }
    }

    >ul {
      list-style: none;
      padding: 11px 0;
    }
  }
</style>
