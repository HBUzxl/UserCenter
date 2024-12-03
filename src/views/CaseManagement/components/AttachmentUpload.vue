<template>
    <div class="attachment-upload">
      <div class="upload-header">
        <h3>上传附件</h3>
        <div class="button-group">
          <input
            type="file"
            ref="fileInput"
            @change="handleFileSelect"
            style="display: none"
            multiple
          />
          <el-button @click="triggerFileSelect" size="small">选择文件</el-button>
          <el-button 
            type="primary" 
            @click="startUpload" 
            size="small"
            :disabled="!selectedFiles.length"
          >
            开始上传
          </el-button>
        </div>
      </div>
  
      <div class="file-list">
        <el-table :data="selectedFiles" style="width: 100%">
          <el-table-column prop="name" label="文件名" />
          <el-table-column prop="size" label="大小" width="180">
            <template #default="scope">
              {{ formatFileSize(scope.row.size) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template #default="scope">
              <el-button
                type="text"
                @click="removeFile(scope.$index)"
                class="delete-btn"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AttachmentUpload",
    data() {
      return {
        selectedFiles: [],
      };
    },
    methods: {
      triggerFileSelect() {
        this.$refs.fileInput.click();
      },
      handleFileSelect(event) {
        const files = Array.from(event.target.files);
        this.selectedFiles.push(...files);
        // Reset input to allow selecting the same file again
        event.target.value = '';
      },
      removeFile(index) {
        this.selectedFiles.splice(index, 1);
      },
      formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      },
      async startUpload() {
        if (!this.selectedFiles.length) return;
        
        try {
          for (const file of this.selectedFiles) {
            const formData = new FormData();
            formData.append('file', file);
            
            // TODO: Replace with your actual API endpoint
            // await axios.post('/api/upload', formData);
            
            this.$message.success(`文件 ${file.name} 上传成功`);
          }
          this.selectedFiles = [];
        } catch (error) {
          this.$message.error('上传失败，请重试');
          console.error('Upload error:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .attachment-upload {
    padding: 20px;
  }
  
  .upload-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  .file-list {
    margin-top: 20px;
  }
  
  .delete-btn {
    color: #f56c6c;
  }
  
  .delete-btn:hover {
    color: #f78989;
  }
  </style>