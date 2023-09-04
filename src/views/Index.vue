<script setup>
import Aside from "./Aside.vue";
import Header from "./Header.vue";
</script>

<template>
  <el-container>
    <el-aside>
      <Aside></Aside>
    </el-aside>
    <el-main>
      <div class="header">
        <Header></Header>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
}
.el-aside {
  height: 100%;
  width: 308px;
}
.el-aside::-webkit-scrollbar {
  width: 0;
}
.el-main {
  padding: 0;
  border-radius: 36px 0 0 36px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
}
.header {
  height: 88px;
}
.content {
  height: 100%;
}
</style>
