<template>
  <div>
    <van-cell-group>
      <van-field v-model="form.roomName" placeholder="房间名" />
      <van-field v-model="form.userName" placeholder="租户姓名" />
      <van-field v-model="form.phone" placeholder="联系电话" />
      <van-field v-model="form.idCard" placeholder="身份证号" />
      <van-field v-model="form.rent" placeholder="租金" />
      <van-field v-model="form.deposit" placeholder="押金" />

      <!-- 时间选择 -->
      <div class="info-title">到期时间</div>
      <van-datetime-picker
        v-model="form.date"
        type="date"
        :show-toolbar='false'/>
      <div>&nbsp;</div>
      <!-- 时间选择 -->

      <van-button type="primary" size="large" @click="add">保 存</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import api from '@api'
import Vue from 'vue'
import { Field, Button, DatetimePicker } from 'vant'
Vue.use(Field).use(Button).use(DatetimePicker)

export default {
  components: {
    // x
  },
  // props: [''],
  computed: {
  },
  data () {
    return {
      form: {
        id: '',
        roomName: '', // 房间名
        userName: '', // 用户名
        phone: '', // 手机
        idCard: '', // 身份证
        rent: '', // 租金
        deposit: '', // 押金
        date: new Date() // 到期日期
      }
    }
  },
  methods: {
    add () {
      let data = api.clone(this.form)
      data.date = api.date.format(data.date, false)
      console.log(data)
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
.info-title{
  color: #666;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px 0 0;
}
</style>
