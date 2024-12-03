<template>
<<<<<<< HEAD
    <div>
        <h1>Consultation Statistics</h1>
        <h1>Hello world</h1>
=======
  <div class="unsubmitted-cases">
    <!-- 顶部操作区域 -->
    <!-- 顶部操作区域 -->
    <div class="operation-bar">
      <div class="search-box">
        <el-input
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          @input="handleSearch"
        >
          <template #append>
            <el-button icon="el-icon-search" @click="handleSearch"
              >搜索</el-button
            >
          </template>
        </el-input>
      </div>
      <el-button type="success" @click="handleExport">
        <i class="el-icon-download"></i>
        导出Excel
      </el-button>
>>>>>>> d97ca114b5bc91a0ac9f1fb95591e54456d793b3
    </div>
    <!-- 表格 -->
    <el-table
      :data="filteredTableData"
      border
      style="width: 100%"
      v-loading="loading"
      :resizable="false"
    >
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="status" label="会诊状态" min-width="100" />
      <el-table-column prop="consultationNo" label="会诊编号" min-width="120" />
      <el-table-column prop="caseType" label="病例类型" min-width="100" />
      <el-table-column prop="pathologyNo" label="病理号" min-width="100" />
      <el-table-column prop="name" label="姓名" min-width="80" />
      <el-table-column prop="gender" label="性别" min-width="60" />
      <el-table-column prop="age" label="年龄" min-width="60" />
      <el-table-column prop="diagnosis" label="诊断结果" min-width="150" />
      <el-table-column prop="applyUnit" label="申请单位" min-width="120" />
      <el-table-column
        prop="consultationCenter"
        label="会诊中心"
        min-width="120"
      />
      <el-table-column prop="submitTime" label="提交时间" min-width="150" />
      <el-table-column prop="expert" label="诊断专家" min-width="100" />
    </el-table>
  </div>
</template>
      
      <script>
import { ref, computed } from "vue";

export default {
  name: "UnsubmittedCases",
  setup() {
    const loading = ref(false);
    const searchQuery = ref("");
    const tableData = ref([
      // 示例数据，实际使用时应该从API获取
      {
        status: "已完成",
        consultationNo: "C2023001",
        caseType: "常规",
        pathologyNo: "P2023001",
        name: "张三",
        gender: "男",
        age: 45,
        diagnosis: "良性肿瘤",
        applyUnit: "第一人民医院",
        consultationCenter: "省立医院",
        submitTime: "2023-10-20 14:30:00",
        expert: "李医生",
      },
      // 可以添加更多示例数据
    ]);

    // 搜索过滤
    const filteredTableData = computed(() => {
      if (!searchQuery.value) return tableData.value;
      return tableData.value.filter((data) => {
        return Object.values(data).some((value) =>
          String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
    });

    // 处理编辑
    const handleEdit = (row) => {
      console.log("编辑行:", row);
      // 实现编辑逻辑
    };

    // 处理删除
    const handleDelete = (row) => {
      console.log("删除行:", row);
      // 实现删除逻辑
    };

    const handleSearch = () => {
      console.log("搜索");
      // 实现搜索逻辑
    };

    const handleExport = () => {
      console.log("导出Excel");
      // 实现导出Excel逻辑
    };

    return {
      loading,
      searchQuery,
      filteredTableData,
      handleEdit,
      handleDelete,
      handleSearch,
      handleExport,
    };
  },
};
</script>
      
<style scoped>
    .unsubmitted-cases {
    padding: 0px;
    }

    .operation-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    }

    .search-box {
    width: 300px;
    }
</style>