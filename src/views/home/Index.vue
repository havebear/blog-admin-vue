<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-01-20 15:04:47
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-01-20 17:47:36
 * @Description:  主页
-->

<template>
  <a-layout class="home">
    <slide :collapsed="collapsed" />
    <a-layout>
      <s-header :collapsed="collapsed" @on-collapse="handleCollapse" />
      <s-content />
    </a-layout>
  </a-layout>
</template>
<script>
import SHeader from './components/Header'
import Slide from './components/Slide'
import SContent from './components/Content'

export default {
  components: {
    SHeader,
    Slide,
    SContent
  },
  data () {
    return {
      collapsed: true
    }
  },
  methods: {
    handleCollapse (value) {
      this.collapsed = value
    }
  }
}
</script>
<style scoped lang="less">
.home {
  height: 100%;
}
</style>
