<template>
    <div class="case-info">
      <el-form
        ref="formRef"
        :model="form"
        label-width="100px"
        :rules="rules"
        class="case-form"
      >
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="病理号" prop="pathologyNo">
              <el-input v-model="form.pathologyNo" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" prop="gender">
              <el-select v-model="form.gender" placeholder="请选择性别" style="width: 100%">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="年龄" prop="age">
              <el-input-number v-model="form.age" :min="0" :max="150" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="病人类型" prop="patientType">
              <el-select v-model="form.patientType" placeholder="请选择类型" style="width: 100%">
                <el-option label="门诊" value="门诊" />
                <el-option label="住院" value="住院" />
                <el-option label="体检" value="体检" />
                <el-option label="其它" value="其它" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="取材部位" prop="samplingLocation">
              <el-select v-model="form.samplingLocation" placeholder="请选择部位" style="width: 100%">
                <el-option label="皮肤" value="皮肤" />
                <el-option label="肺" value="肺" />
                <el-option label="肝" value="肝" />
                <el-option label="胃" value="胃" />
                <el-option label="肠" value="肠" />
                <el-option label="其他" value="其他" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="组织个数" prop="tissueCount">
              <el-input-number v-model="form.tissueCount" :min="0" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="条形码" prop="barcode">
              <el-input v-model="form.barcode" />
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="体检编号" prop="checkupNo">
              <el-input v-model="form.checkupNo" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="临床电话" prop="clinicalPhone">
              <el-input v-model="form.clinicalPhone" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="送检医院" prop="hospital">
              <el-input v-model="form.hospital" />
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第五行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="采样日期" prop="sampleDate">
              <el-date-picker
                v-model="form.sampleDate"
                type="date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="接收日期" prop="receiveDate">
              <el-date-picker
                v-model="form.receiveDate"
                type="date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="病理类型" prop="pathologyType">
              <el-select v-model="form.pathologyType" placeholder="请选择类型" style="width: 100%">
                <el-option label="常规" value="常规" />
                <el-option label="细胞" value="细胞" />
                <el-option label="冰冻" value="冰冻" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 第六行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="门诊/住院号" prop="patientNo">
              <el-input v-model="form.patientNo" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="床号" prop="bedNo">
              <el-input v-model="form.bedNo" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="婚姻状况" prop="maritalStatus">
              <el-select v-model="form.maritalStatus" placeholder="请选择" style="width: 100%">
                <el-option label="已婚" value="已婚" />
                <el-option label="未婚" value="未婚" />
                <el-option label="离异" value="离异" />
                <el-option label="丧偶" value="丧偶" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 地址 -->
        <el-form-item label="病人地址" prop="address">
          <el-input v-model="form.address" />
        </el-form-item>

        <!-- 临床诊断 -->
        <el-form-item label="临床诊断" prop="clinicalDiagnosis">
          <el-input
            v-model="form.clinicalDiagnosis"
            type="textarea"
            :rows="4"
            placeholder="请输入临床诊断信息"
          />
        </el-form-item>

        <!-- 临床资料 -->
        <el-form-item label="临床资料" prop="clinicalData">
          <el-input
            v-model="form.clinicalData"
            type="textarea"
            :rows="4"
            placeholder="不超过200个字"
          />
        </el-form-item>

        <!-- 大文本框 -->
        <el-form-item label="肉眼所见" prop="macroscopy">
          <el-input
            v-model="form.macroscopy"
            type="textarea"
            :rows="4"
            placeholder="不超过200个字"
          />
        </el-form-item>

        <el-form-item label="免疫组化" prop="immunohistochemistry">
          <el-input
            v-model="form.immunohistochemistry"
            type="textarea"
            :rows="4"
            placeholder="不超过200个字"
          />
        </el-form-item>

        <el-form-item label="病理诊断" prop="diagnosis">
          <el-input
            v-model="form.diagnosis"
            type="textarea"
            :rows="4"
            placeholder="不超过200个字"
          />
        </el-form-item>

        <el-form-item label="备注" prop="remarks">
          <el-input
            v-model="form.remarks"
            type="textarea"
            :rows="4"
            placeholder="不超过200个字"
          />
        </el-form-item>
      </el-form>
    </div>
  </template>

  <script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'CaseInfo',
    setup() {
      const formRef = ref(null)
      const form = reactive({
        pathologyNo: '',
        name: '',
        gender: '',
        age: '',
        phone: '',
        patientType: '',
        samplingLocation: '', // 新增取材部位
        tissueCount: 0,
        barcode: '',
        checkupNo: '',
        clinicalPhone: '', // 新增临床电话
        hospital: '',
        department: '',
        doctor: '',
        sampleDate: '',
        receiveDate: '',
        pathologyType: '',
        patientNo: '',
        bedNo: '',
        maritalStatus: '',
        address: '',
        clinicalDiagnosis: '', // 新增临床诊断
        clinicalData: '',
        macroscopy: '',
        immunohistochemistry: '',
        diagnosis: '',
        remarks: ''
      })

      const rules = {
        pathologyNo: [{ required: true, message: '请输入病理号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        patientType: [{ required: true, message: '请选择病人类型', trigger: 'change' }],
        pathologyType: [{ required: true, message: '请选择病理类型', trigger: 'change' }]
      }

      return {
        formRef,
        form,
        rules
      }
    }
  }
  </script>

  <style scoped>
  .case-info {
    background-color: #fff;
  }

  .case-form {
    max-width: 100%;
  }

  :deep(.el-form-item) {
    margin-bottom: 22px;
  }

  :deep(.el-form-item__label) {
    font-weight: 500;
    color: #606266;
  }

  :deep(.el-input__inner) {
    border-radius: 4px;
  }

  :deep(.el-textarea__inner) {
    font-family: inherit;
    border-radius: 4px;
    padding: 10px;
    line-height: 1.5;
  }

  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-input-number) {
    width: 100%;
  }



  /* 大文本框样式优化 */
  :deep(.el-form-item--default .el-form-item__content) {
    .el-textarea__inner {
      min-height: 120px;
      resize: vertical;
    }
  }
  </style>