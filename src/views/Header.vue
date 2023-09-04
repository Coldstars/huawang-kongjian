<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
</script>

<template>
  <div class="header">
    <div class="title">
      <img src="../assets/images/logo.png" alt="logo" />
      <h1>金龙湖小学智慧教育云平台</h1>
    </div>
    <div></div>
    <ul class="tabs">
      <li :class="{ selected: onRoutes === '/Home' || onRoutes === '/Index' }">
        <router-link to="/Home"> 个人空间</router-link>
      </li>
      <li :class="{ selected: onRoutes === '/Software' }">
        <router-link to="/Software">应用商城</router-link>
      </li>
    </ul>
    <div class="info">
      <p>
        <img src="../assets/icon/theme.svg" alt="" /><a href="">切换皮肤</a>
      </p>
      <p>
        <img src="../assets/images/pic.png" alt="" /><a href="">系统管理员</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: var(--color-text-first);
}
.header > .title {
  display: flex;
  align-items: center;
}
.header > .title img {
  width: 36px;
  height: 36px;
  margin-right: 16px;
}
.header > .title h1 {
  font-size: 26px;
  font-weight: 700;
}
.header > .tabs {
  display: flex;
  align-items: center;
}
.header > .tabs li {
  padding: 0 16px;
}
.header > .tabs li.selected {
  font-size: 18px;
  position: relative;
}
.header > .tabs li.selected a {
  font-weight: bold;
}
.header > .tabs li.selected::before {
  content: " ";
  position: absolute;
  bottom: -12px;
  left: calc(50% - 8px);
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--color-primary);
}
.header > .info {
  display: flex;
}
.header > .info p {
  display: flex;
  align-items: center;
  margin-left: 24px;
}
.header > .info img {
  margin-right: 8px;
}
.header > .info p:nth-child(2) a {
  line-height: 15px;
}
</style>
