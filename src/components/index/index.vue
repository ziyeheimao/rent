<template>
  <div>
    <!-- <van-cell-group>
      <van-cell size="large" is-link
        v-for='(v, k) in data' :key="k"
        :title="v.title" :value="v.value"
        @click="click(v)"/>
    </van-cell-group> --><!-- :label="v.info" -->
    <div>
      <van-button square type="primary" text="添加房间" @click="add" />
    </div>
    <van-swipe-cell v-for='(v, k) in data' :key="k">
      <!-- <template slot="left">
        <van-button square type="primary" text="选择" />
        <van-button square type="primary" text="选择" />
      </template> -->

      <van-cell :border="false" :title="v.title" :value="v.value" @click="detail(v)"/>

      <template slot="right">
        <van-button square type="danger" text="删除" @click="del(v)" />
        <van-button square type="primary" text="详情" @click="detail(v)" />
      </template>
    </van-swipe-cell>

  </div>
</template>

<script>
import Vue from 'vue'
//          单元格         滑动单元格
import { Cell, CellGroup, SwipeCell, Button } from 'vant'

Vue.use(Cell).use(CellGroup).use(SwipeCell).use(Button)

export default {
  components: {
    // x
  },
  // props: [''],
  computed: {

  },
  data () {
    return {
      data: [
        { id: 1, title: '1号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 2, title: '2号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 3, title: '3号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 4, title: '4号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 5, title: '5号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 6, title: '6号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 7, title: '7号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 8, title: '8号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 9, title: '9号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' },
        { id: 10, title: '10号房间', value: '2019-12-02', info: '王小明 13011401110 220521199301150012' }
      ]
    }
  },
  methods: {
    // 添加房间
    add () {
      console.log('添加房间')
    },
    // 删除房间
    del (v) {
      console.log(v)
    },
    // 房间详情
    detail (v) {
      console.log(v)
      this.$router.push({ name: `details`, query: { id: v.id } })// params: { id: v.id },
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  deactivated () {},
  watch: {}
}
</script>

<style scoped>
*{
  /* outline: 1px solid red; */
}
</style>
