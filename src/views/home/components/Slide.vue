<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-01-20 17:11:41
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-01-20 17:22:13
 * @Description:  侧边导航
-->

<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="home-logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="less">
.home-logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
