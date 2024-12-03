<template>
  <el-container class="layout-container">
    <el-aside width="200px" class="aside">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header height="60px" class="header">
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}

.aside {
  background-color: #304156;
  color: #fff;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>