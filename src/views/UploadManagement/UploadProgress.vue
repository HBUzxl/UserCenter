<template>
  <div class="unsubmitted-cases">
    <!-- 表格 -->
    <el-table
      :data="filteredTableData"
      border
      style="width: 100%"
      v-loading="loading"
      :resizable="false"
    >
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column
        prop="localFileName"
        label="本地文件名称"
        min-width="150"
      />
      <el-table-column
        prop="serverFileName"
        label="服务器文件名称"
        min-width="150"
      />
      <el-table-column prop="targetStorage" label="目标存储" min-width="100" />
      <el-table-column prop="fileSize" label="大小" min-width="100" />
      <el-table-column prop="progress" label="进度" min-width="100">
        <template #default="scope">
          <el-progress :percentage="scope.row.progress"></el-progress>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" min-width="100" />
      <el-table-column label="操作" min-width="150">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleRetry(scope.row)"
            >重试</el-button
          >
          <el-button size="small" type="danger" @click="handleCancel(scope.row)"
            >取消</el-button
          >
        </template>
      </el-table-column>
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
        localFileName: "病例1.pdf",
        serverFileName: "case1_20231020143000.pdf",
        targetStorage: "本地存储",
        fileSize: "2.5MB",
        progress: 75,
        status: "上传中",
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

    return {
      loading,
      searchQuery,
      filteredTableData,
      handleEdit,
      handleDelete,
    };
  },
};
</script>
    
    <style scoped>
.unsubmitted-cases {
  padding: 0px;
}
</style>