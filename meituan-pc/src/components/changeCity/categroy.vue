<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'city-'+ index">
            <dt>{{index}}</dt>
            <dd>
               <span  v-for="city in item" :key="city.id" @click="changeCity(city)"> {{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList: [],
            cityGroup: {},
        }
    },
    created() {
        api.getCityList().then((res) => {
            let data = res.data.data;
            let obj = {};
            data.forEach((item, index) => {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            console.log(obj)
            this.cityGroup = obj;
        })

    },
    methods: {
        changeCity(city) {
            this.$store.state.position = city;
            this.$router.push({name: 'index'})
        }
    }
}
</script>

<style lang="scss">
.m-categroy {
  display: flex;
  margin-bottom: 30px;

  dt {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  dd {
    font-size: 15px;
    color: #666;
    margin: 0 6px;
    width: 24px;
    height: 24px;
    padding: 4px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;

    &:hover {
      background: #F8F8F8;
    }
  }
}
a {
  text-decoration: none;
}
.m-categroy-section {
  display: flex;
  padding: 13px 30px 13px 10px;
  border-radius: 10px;

  &:hover {
    background: #F8F8F8;
  }

  dt {
    box-sizing: border-box;
    vertical-align: top;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: #13D1BE;
    box-shadow: 0 4px 5px 0 rgba(39, 178, 164, .22);
  }

  dd {
    flex: 1;

    span {
      margin: 10px 20px;
      color: #666;
      display: inline-block;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color:#13D1BE;
      }
      &:target {
        color: aquamarine;
      }
    }
  }
}
</style>

