<template>
  <el-dialog
    title="新建病例"
    v-model="dialogVisible"
    width="50%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="病理号" prop="pathologyNo">
        <el-input v-model="form.pathologyNo" />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input-number v-model="form.age" :min="0" :max="150" />
      </el-form-item>
      <el-form-item label="病理类型" prop="pathologyType">
        <el-input v-model="form.pathologyType" />
      </el-form-item>
      <el-form-item label="诊断专家" prop="expert">
        <el-input v-model="form.expert" />
      </el-form-item>
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

export default {
  name: "NewCaseForm",
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

    // 监听 props.visible 的变化
    watch(
      () => props.visible,
      (newVal) => {
        dialogVisible.value = newVal;
      }
    );

    const form = reactive({
      pathologyNo: "",
      name: "",
      gender: "",
      age: "",
      pathologyType: "",
      expert: "",
    });

    const rules = {
      pathologyNo: [
        { required: true, message: "请输入病理号", trigger: "blur" },
      ],
      name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      gender: [{ required: true, message: "请选择性别", trigger: "change" }],
      age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
      pathologyType: [
        { required: true, message: "请输入病理类型", trigger: "blur" },
      ],
      expert: [{ required: true, message: "请输入诊断专家", trigger: "blur" }],
    };

    const handleClose = () => {
      emit("update:visible", false);
      formRef.value?.resetFields();
    };

    const handleSubmit = async () => {
      if (!formRef.value) return;

      try {
        await formRef.value.validate();
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
      rules,
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
</style>