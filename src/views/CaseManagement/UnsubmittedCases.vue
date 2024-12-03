<template>
    <div class="unsubmitted-cases">
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
              <el-button icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </template>
          </el-input>
        </div>
        <el-button type="primary" @click="handleCreate">新建病例</el-button>
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
        <el-table-column prop="pathologyNo" label="病理号" min-width="100" />
        <el-table-column prop="name" label="姓名" min-width="80" />
        <el-table-column prop="gender" label="性别" min-width="80" />
        <el-table-column prop="age" label="年龄" min-width="80" />
        <el-table-column prop="pathologyType" label="病理类型" min-width="100" />
        <el-table-column prop="expert" label="诊断专家" min-width="100" />
        <el-table-column prop="printCount" label="打印次数" min-width="90" />
        <el-table-column label="操作"  min-width="150">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.row)"
            >编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <NewCaseForm v-model:visible="showNewCaseForm" @submit="handleNewCaseSubmit" />

  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import NewCaseForm from './NewCaseForm.vue'

  export default {
    name: 'UnsubmittedCases',
    components: {
      NewCaseForm
    },
    setup() {
      const loading = ref(false)
      const searchQuery = ref('')
      const showNewCaseForm = ref(false)


      const tableData = ref([
        // 示例数据，实际使用时应该从API获取
        {
          pathologyNo: 'P2023001',
          name: '张三',
          gender: '男',
          age: 45,
          pathologyType: '常规',
          expert: '李医生',
          printCount: 2
        },
        // 可以添加更多示例数据
      ])
  
      // 搜索过滤
      const filteredTableData = computed(() => {
        if (!searchQuery.value) return tableData.value
        return tableData.value.filter(data => {
          return Object.values(data).some(value =>
            String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
          )
        })
      })
  
      // 处理搜索
      const handleSearch = () => {
        // 实际使用时可能需要调用API进行搜索
        console.log('搜索关键词:', searchQuery.value)
      }
  
      // 处理新建按钮点击
      const handleCreate = () => {
        showNewCaseForm.value = true
        console.log('点击新建按钮')
        // 实现新建逻辑
      }

      //表单提交
      const handleNewCaseSubmit = (newCase) => {
        console.log('表单提交:', newCase)
        // 在这里处理新建病例的逻辑
      }
  
      // 处理编辑
      const handleEdit = (row) => {
        console.log('编辑行:', row)
        // 实现编辑逻辑
      }
  
      // 处理删除
      const handleDelete = (row) => {
        console.log('删除行:', row)
        // 实现删除逻辑
      }
  
      return {
        loading,
        searchQuery,
        filteredTableData,
        handleSearch,
        handleCreate,
        handleEdit,
        handleDelete,
        showNewCaseForm,
        handleNewCaseSubmit
      }
    }
  }

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

  .operation-bar .el-button {
    margin-right: 10px;
  }
  </style>