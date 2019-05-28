<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      chooseClass="province"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      chooseClass="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="disabledCity"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import api from '@/api/api.js';
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: [],
      searchWord: '',
      loading: false,
      disabledCity: true,
    };
  },
  components: {
    MSelect
  },
  created() {
    api.getProvinceList().then((res) => {
      if (res.data.status == 'success') {
        // console.log()
        this.provinceList = res.data.data.map((item) => {
          item.name = item.provinceName;
          return item;
        });
      }
    })
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
        this.province = item.name;
        this.cityList = item.cityInfoList;
        this.disabledCity = false;
    },
    changeCity(item) {
        this.city = item.name;
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'index'})
    },
    remoteMethod(val) {
        // 请求后端接口
        console.log(document.cookie, localStorage)
    }
  }
};
</script>
<style lang="scss">
.page-changeCity{
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
  .m-iselect {
    .province {
      cursor: pointer;
      border-radius: 4px;
      margin: 0 10px 0 20px;
    }

    .city {
      cursor: not-allowed;
      border-radius: 4px;
      margin: 0 20px 0 10px;
    }
    .name.search {
      margin-left: 50px;
    }
    .label {
      margin-left: 40px;
    }

    .input {
      width: 220px;
      height: 40px;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 14px;
      color: #666;
      box-sizing: border-box;
    }
  }
  .el-row {
    padding-bottom: 20px;
    &:after{
      content: ' ';
      height: 1px;
      width: 100%;
      border-bottom: 1px solid #E5E5E5;
      padding-top: 20px;
    }
  }
}

</style>


