<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-01-20 17:06:15
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-01-20 17:51:06
 * @Description:  头部
-->

<template>
  <a-layout-header class="home-header">
    <a-icon
      class="trigger"
      :type="icon"
      @click="handleTrigger"
    />
  </a-layout-header>
</template>

<script>

export default {
  props: {
    collapsed: {
      type: Boolean
    }
  },
  computed: {
    icon () {
      return this.collapsed ? 'menu-unfold' : 'menu-fold'
    }
  },
  methods: {
    handleTrigger () {
      this.$emit('on-collapse', !this.collapsed)
    }
  }
}
</script>

<style scoped lang="less">
.home-header {
  background: #fff; padding: 0;
  .trigger {
    // color: @color;
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>