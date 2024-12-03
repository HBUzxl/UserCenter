<template>
    <el-dialog
      title="申请预约"
      :model-value="visible"
      @update:model-value="$emit('update:visible')"
      width="70%"
      @close="handleClose"
    >
      <el-form ref="formRef" :model="form">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="预约信息" name="appointmentInfo">
            <AppointmentInfo v-model="form" />
          </el-tab-pane>
          <el-tab-pane label="选择会诊中心" name="selectCenter">
            <SelectCenter v-model="form" />
          </el-tab-pane>
        </el-tabs>
      </el-form>
  
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
  import AppointmentInfo from "./components/AppointmentInfo.vue";
  import SelectCenter from "./components/SelectCenter.vue";
  
  export default {
    name: "NewCaseForm",
    components: {
      AppointmentInfo,
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
      const activeName = ref("appointmentInfo");
  
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
        activeName.value = "appointmentInfo"; // 重置标签页
        Object.keys(form).forEach(key => {
          form[key] = "";  // 重置表单数据
        });
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