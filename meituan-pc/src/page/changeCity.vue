<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
           <hot title="热门城市:" :list="hotList" />
        </el-row>
        <el-row>
           <hot title="最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hot from "@/components/changeCity/hot.vue"
import Category from '@/components/changeCity/categroy.vue'
import api from '@/api/api.js'
export default {
    data() {
        return {
            hotList: [],
            rencentList: [],
        }
    },
    components: {
        Province,
        hot,
        Category
    },
    created() {
        api.getHotCity().then(res=> {
            if (res.data.status === 'success') {
                 this.hotList = res.data.data.map((item) => item.name);
            }
        });
        api.getRecentCity().then(res => {
              if (res.data.status === 'success') {
                 this.rencentList = res.data.data.map((item) => item.name);
            }
        })
    }
}
</script>
