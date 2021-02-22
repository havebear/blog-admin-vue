<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-01-20 17:11:41
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-02-22 16:49:13
 * @Description:  侧边导航
-->

<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="home-logo">🐻</div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>文章管理</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>博客设置</span>
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
  line-height: 32px;
  text-align: center;
  font-weight: bold;
  color: #fff;
}
</style>
