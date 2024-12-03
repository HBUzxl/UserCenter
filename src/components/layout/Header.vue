<template>
  <div class="header-container">
    <div class="header-left">
      <h2>{{ currentTitle }}</h2>
    </div>
    <div class="header-right">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="32" />
          <span class="username">管理员</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const route = useRoute()
    const currentTitle = computed(() => route.meta.title || '用户中心')

    return {
      currentTitle
    }
  }
}
</script>

<style scoped>
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-left h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #303133;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.username {
  margin-left: 8px;
  font-size: 14px;
  color: #606266;
}
</style>