import { createRouter, createWebHistory } from 'vue-router';

// 导入视图组件
import UnsubmittedCases from '@/views/CaseManagement/UnsubmittedCases.vue';
import PendingDiagnosisCases from '@/views/CaseManagement/PendingDiagnosisCases.vue';
import DiagnosedCases from '@/views/CaseManagement/DiagnosedCases.vue';
import ReturnedCases from '@/views/CaseManagement/ReturnedCases.vue';
import WithdrawnCases from '@/views/CaseManagement/WithdrawnCases.vue';
import FrozenAppointment from '@/views/FrozenAppointment/FrozenAppointment.vue';
import UploadProgress from '@/views/UploadManagement/UploadProgress.vue';
import ConsultationStatistics from '@/views/StatisticsReport/ConsultationStatistics.vue';

const routes = [
    {
        path: '/',
        redirect: '/case-management'
    },
    {
        path: '/case-management',
        name: 'case-management',
        redirect: '/case-management/unsubmitted',
        children: [
            {
                path: 'unsubmitted',
                name: 'unsubmitted-cases',
                component: UnsubmittedCases,
                meta: { title: '未提交案例' }
            },
            {
                path: 'pending-diagnosis',
                name: 'pending-diagnosis-cases',
                component: PendingDiagnosisCases,
                meta: { title: '待诊断案例' }
            },
            {
                path: 'diagnosed',
                name: 'diagnosed-cases',
                component: DiagnosedCases,
                meta: { title: '已诊断案例' }
            },
            {
                path: 'returned',
                name: 'returned-cases',
                component: ReturnedCases,
                meta: { title: '退回案例' }
            },
            {
                path: 'withdrawn',
                name: 'withdrawn-cases',
                component: WithdrawnCases,
                meta: { title: '撤回案例' }
            }
        ]
    },
    {
        path: '/frozen-appointment',
        name: 'frozen-appointment',
        component: FrozenAppointment,
        meta: { title: '冰冻预约' }
    },
    {
        path: '/upload-progress',
        name: 'upload-progress',
        component: UploadProgress,
        meta: { title: '上传进度' }
    },
    {
        path: '/consultation-statistics',
        name: 'consultation-statistics',
        component: ConsultationStatistics,
        meta: { title: '会诊统计' }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;