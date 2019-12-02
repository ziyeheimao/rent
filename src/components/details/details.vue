<template>
<div>
  <van-nav-bar
    title="详情信息"
    left-text="返回"
    right-text="修改"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"/>
</div>

</template>

<script>
// import api from '@api'
// import main from '@main'
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)

export default {
  components: {
    // x
  },
  // props: [''],
  computed: {

  },
  data () {
    return {}
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.push('/')
    },
    onClickRight () {
      console.log('修改')
    }
  },
  beforeCreate () {},
  created () {
    // console.log(this.$route.params)
    // console.log(this.$route.query)
  },
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
</style>
