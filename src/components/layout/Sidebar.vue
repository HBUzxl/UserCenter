<template>
    <div class="sidebar">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img">
        <span class="logo-text">会诊平台</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        :router="true"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF">
        
        <el-sub-menu index="/case-management">
          <template #title>
            <el-icon><Folder /></el-icon>
            <span>病例管理</span>
          </template>
          <el-menu-item index="/case-management/unsubmitted">
            <el-icon><Document /></el-icon>
            <span>未提交病例</span>
          </el-menu-item>
          <el-menu-item index="/case-management/pending-diagnosis">
            <el-icon><Timer /></el-icon>
            <span>待诊断病例</span>
          </el-menu-item>
          <el-menu-item index="/case-management/diagnosed">
            <el-icon><Check /></el-icon>
            <span>已诊断病例</span>
          </el-menu-item>
          <el-menu-item index="/case-management/returned">
            <el-icon><Back /></el-icon>
            <span>被退回病例</span>
          </el-menu-item>
          <el-menu-item index="/case-management/withdrawn">
            <el-icon><Close /></el-icon>
            <span>撤回病例</span>
          </el-menu-item>
        </el-sub-menu>
  
        <el-sub-menu index="/frozen-appointment">
          <template #title>
            <el-icon><Calendar /></el-icon>
            <span>冰冻预约</span>
          </template>
          <el-menu-item index="/frozen-appointment">
            <el-icon><Clock /></el-icon>
            <span>预约</span>
          </el-menu-item>
        </el-sub-menu>
  
        <el-sub-menu index="/upload-management">
          <template #title>
            <el-icon><Upload /></el-icon>
            <span>上传管理</span>
          </template>
          <el-menu-item index="/upload-progress">
            <el-icon><Loading /></el-icon>
            <span>上传进度</span>
          </el-menu-item>
        </el-sub-menu>
  
        <el-sub-menu index="/statistics-report">
          <template #title>
            <el-icon><DataLine /></el-icon>
            <span>统计报表</span>
          </template>
          <el-menu-item index="/consultation-statistics">
            <el-icon><PieChart /></el-icon>
            <span>会诊统计</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import {
    Folder,
    Document,
    Timer,
    Check,
    Back,
    Close,
    Calendar,
    Upload,
    Loading,
    DataLine,
    PieChart,
    Clock
  } from '@element-plus/icons-vue'
  
  export default {
    name: 'Sidebar',
    components: {
      Folder,
      Document,
      Timer,
      Check,
      Back,
      Close,
      Calendar,
      Upload,
      Loading,
      DataLine,
      PieChart,
      Clock
    },
    setup() {
      const route = useRoute()
      const activeMenu = computed(() => route.path)
  
      return {
        activeMenu
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    height: 100%;
    background-color: #304156;
  }
  
  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background-color: #2b2f3a;
  }
  
  .logo-img {
    width: 32px;
    height: 32px;
  }
  
  .logo-text {
    margin-left: 12px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  
  .el-menu {
    border-right: none;
  }
  
  .el-menu-item {
    display: flex;
    align-items: center;
  }
  
  .el-menu-item .el-icon {
    margin-right: 12px;
    font-size: 18px;
  }
  
  :deep(.el-sub-menu__title) {
    display: flex;
    align-items: center;
  }
  
  :deep(.el-sub-menu__title .el-icon) {
    margin-right: 12px;
    font-size: 18px;
  }
  </style>