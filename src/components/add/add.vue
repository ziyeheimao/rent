<template>
  <div>
    <van-cell-group>
      <van-field clearable v-model="form.roomName"
        :error-message='err.roomName.msg' :error="err.open" error-message-align='center'
        placeholder="房间名"
        @blur='vali("roomName")' />
      <van-field clearable v-model="form.userName"
        :error-message='err.userName.msg' :error="err.open" error-message-align='center'
        placeholder="租户姓名"
        @blur='vali("userName")' />
      <van-field clearable v-model="form.phone"
        :error-message='err.phone.msg' :error="err.open" error-message-align='center'
        placeholder="联系电话"
        @blur='vali("phone")' />
      <van-field clearable v-model="form.idCard"
        :error-message='err.idCard.msg' :error="err.open" error-message-align='center'
        placeholder="身份证号"
        @blur='vali("idCard")' />
      <van-field clearable v-model="form.rent"
        :error-message='err.rent.msg' :error="err.open" error-message-align='center'
        placeholder="租金"
        @blur='vali("rent")' />
      <van-field clearable v-model="form.deposit"
        :error-message='err.deposit.msg' :error="err.open" error-message-align='center'
        placeholder="押金"
        @blur='vali("deposit")' />

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
      },
      err: {
        roomName: {
          msg: '房间名应在1-8字之间', // 房间名
          open: false
        },
        userName: {
          msg: '租户姓名在2-6字之间', // 用户名
          open: false
        },
        phone: {
          msg: '请输入正确的手机号', // 手机
          open: false
        },
        idCard: {
          msg: '请输入正确的身份证号', // 身份证
          open: false
        },
        rent: {
          msg: '租金只能是正整数', // 租金
          open: false
        },
        deposit: {
          msg: '押金只能是正整数', // 押金
          open: false
        }
      },
      reg: {
        roomName: /^[\s\S]{1,8}$/,
        userName: /^[\s\S]{2,6}$/,
        phone: /^1([3-9][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
        idCard: /^[1-9]([0-9]{13}|[0-9]{16})([0-9]|X)$/,
        rent: /^[1-9]\d*$/,
        deposit: /^[1-9]\d*$/
      }
    }
  },
  methods: {
    add () {
      let data = api.clone(this.form)
      data.date = api.date.format(data.date, false)
      console.log(data)
    },

    vali (item) {
      switch (item) {
        case 'roomName':
          console.log(this.form.roomName)

          break
        case 'userName':
          console.log(this.form.userName)
          break
        case 'phone':
          console.log(this.form.phone)
          break
        case 'idCard':
          console.log(this.form.idCard)
          break
        case 'rent':
          console.log(this.form.rent)
          break
        case 'deposit':
          console.log(this.form.deposit)
          break
      }
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
