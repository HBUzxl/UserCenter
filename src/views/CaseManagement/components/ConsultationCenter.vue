<template>
    <div class="consultation-center">
      <div class="filter-section">
        <div class="center-filter">
          <span>会诊中心：</span>
          <el-checkbox v-model="filterOptions.showHuadongCenter">
            华东病理远程诊断中心
          </el-checkbox>
        </div>
        <div class="expert-search">
          <span>会诊专家：</span>
          <el-input
            v-model="searchQuery"
            placeholder="专家姓名检索"
            clearable
            @input="handleSearch"
          >
            <template #append>
              <el-button type="primary">专家姓名检索</el-button>
            </template>
          </el-input>
        </div>
      </div>
  
      <el-table
        :data="filteredExperts"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        table-layout="fixed"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="#" width="60" type="index" />
        <el-table-column prop="name" label="专家姓名" min-width="120" />
        <el-table-column prop="center" label="会诊中心" min-width="200" />
        <el-table-column prop="remote" label="远程电话" min-width="120" />
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConsultationCenter",
    data() {
      return {
        filterOptions: {
          showHuadongCenter: true,
        },
        searchQuery: "",
        experts: [
          {
            id: 1,
            name: "张金蓉",
            center: "华东病理远程诊断中心",
            remote: "远程会诊",
          },
          {
            id: 2,
            name: "汉元专家",
            center: "华东病理远程诊断中心",
            remote: "远程会诊",
          },
          {
            id: 3,
            name: "张伟",
            center: "华东病理远程诊断中心",
            remote: "远程会诊",
          },
          {
            id: 4,
            name: "陈妍玲",
            center: "华东病理远程诊断中心",
            remote: "远程会诊",
          },
          {
            id: 5,
            name: "李玉兰",
            center: "华东病理远程诊断中心",
            remote: "远程会诊",
          },
        ],
        selectedExperts: [],
      };
    },
    computed: {
      filteredExperts() {
        return this.experts.filter((expert) => {
          const matchesSearch = this.searchQuery
            ? expert.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            : true;
          const matchesCenter = this.filterOptions.showHuadongCenter
            ? expert.center === "华东病理远程诊断中心"
            : true;
          return matchesSearch && matchesCenter;
        });
      },
    },
    methods: {
      handleSearch() {
        // 搜索逻辑可以在这里扩展
      },
      handleSelectionChange(selection) {
        this.selectedExperts = selection;
      },
    },
    mounted() {
      // 处理 ResizeObserver 警告
      window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
          e.stopPropagation();
        }
      });
    },
  };
  </script>
  
  <style scoped>
  .consultation-center {
    padding: 20px;
  }
  
  .filter-section {
    margin-bottom: 20px;
  }
  
  .center-filter {
    margin-bottom: 15px;
  }
  
  .expert-search {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .expert-search .el-input {
    width: 300px;
  }
  
  :deep(.el-table) {
    margin-top: 20px;
  }
  </style>