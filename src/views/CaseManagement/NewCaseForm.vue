<template>
    <el-dialog
      title="新建病例"
      v-model="dialogVisible"
      width="70%"
      @close="handleClose"
    >
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="病例信息" name="caseInfo">
          <CaseInfo />
        </el-tab-pane>
        <el-tab-pane label="上传切片" name="uploadSlice">
          <UploadSlice />
        </el-tab-pane>
        <el-tab-pane label="上传附件" name="uploadAttachment">
          <UploadAttachment />
        </el-tab-pane>
        <el-tab-pane label="选择会诊中心" name="selectCenter">
          <SelectCenter />
        </el-tab-pane>
      </el-tabs>
  
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script>
  import { ref, reactive, watch } from "vue";
  import CaseInfo from "./components/CaseInfo.vue";
  import UploadSlice from "./components/SliceUpload.vue";
  import UploadAttachment from "./components/AttachmentUpload.vue";
  import SelectCenter from "./components/ConsultationCenter.vue";
  
  export default {
    name: "NewCaseForm",
    components: {
      CaseInfo,
      UploadSlice,
      UploadAttachment,
      SelectCenter,
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:visible", "submit"],
    setup(props, { emit }) {
      const formRef = ref(null);
      const dialogVisible = ref(props.visible);
      const activeName = ref("caseInfo");
  
      watch(() => props.visible, (newVal) => {
        dialogVisible.value = newVal;
      });
  
      const form = reactive({
        pathologyNo: "",
        name: "",
        gender: "",
        age: "",
        pathologyType: "",
        expert: "",
      });
  
      const handleClose = () => {
        emit("update:visible", false);
        formRef.value?.resetFields();
      };
  
      const handleSubmit = async () => {
        if (!formRef.value) return;
        try {
          emit("submit", { ...form });
          handleClose();
        } catch (error) {
          console.error("表单验证失败:", error);
        }
      };
  
      return {
        formRef,
        dialogVisible,
        form,
        activeName,
        handleClose,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .demo-tabs {
    margin: 15px 0;
  }

  .dialog-footer {
    text-align: right;
  }

  :deep(.el-dialog__body) {
    padding: 10px 20px;
  }

  :deep(.el-tabs__header) {
    margin-bottom: 15px;
  }

  :deep(.demo-tabs) {
    margin-top: -10px;
  }
  </style>