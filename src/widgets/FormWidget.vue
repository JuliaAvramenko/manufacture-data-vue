<script setup lang="ts">
import { useFormStore } from '@/stores/form';
import { computed, ref, watch } from 'vue';
import { departments } from '@/data/companyData'
import { teams } from '@/data/companyData'
import { shifts } from '@/data/companyData'
import { employees } from '@/data/companyData';
import router from '@/router';
import Dropdown from '@/entities/Dropdown.vue';

const citySelected = ref<string>('')
const departmentSelected = ref<string>('')
const employeeSelected = ref<string>('')
const teamSelected = ref<string>('')
const shiftSelected = ref<string>('')


const formStore = useFormStore();

const handleSubmit = () => {
    formStore.setFormData({
        city: citySelected.value,
        department: departmentSelected.value,
        employee: employeeSelected.value,
        team: teamSelected.value,
        shift: shiftSelected.value
    })

    citySelected.value = '';
    departmentSelected.value = '';
    employeeSelected.value = '';
    teamSelected.value = '';
    shiftSelected.value = '';
    router.push('/results')
}


watch(citySelected, () => {
    departmentSelected.value = '';
    employeeSelected.value = '';
    teamSelected.value = '';
    shiftSelected.value = '';
});

const isDepartmentEnabled = computed(() => citySelected.value !== '');
const isEmployeeEnabled = computed(() => departmentSelected.value !== '');
const isTeamEnabled = computed(() => employeeSelected.value !== '');
const isShiftEnabled = computed(() => employeeSelected.value !== '');


watch(departmentSelected, () => {
    employeeSelected.value = '';
    teamSelected.value = '';
    shiftSelected.value = '';
});

watch(employeeSelected, () => {
    teamSelected.value = '';
    shiftSelected.value = '';
});

const citiesArray = computed<string[]>(() => departments.value.map((department: any) => department.id));

const departmentsArray = computed<string[]>(() => {
    const targetDepartment = departments.value.find((department: any) => department.id === citySelected.value);
    return targetDepartment ? targetDepartment.department : [];
});

const employeesArray = computed<string[]>(() => {
    const targetEmployee = employees.value.find((employee: any) => employee.id === departmentSelected.value)
    return targetEmployee ? targetEmployee.employee : [];
})

const isFormValid = computed(() => {
    return citySelected.value !== '' &&
        departmentSelected.value !== '' &&
        employeeSelected.value !== '' &&
        teamSelected.value !== '' &&
        shiftSelected.value !== '';
});

</script>

<template>
    <form @submit.prevent="handleSubmit" class="form">
        <p class="text">Город</p>
        <Dropdown v-model:selectedValue="citySelected" :data="citiesArray" :disableCondition="false"></Dropdown>
        <p class="text">Цех</p>
        <Dropdown v-model:selectedValue="departmentSelected" :data="departmentsArray"
            :disableCondition="!isDepartmentEnabled">
        </Dropdown>
        <p class="text">Сотрудник</p>
        <Dropdown v-model:selectedValue="employeeSelected" :data="employeesArray"
            :disableCondition="!isEmployeeEnabled">
        </Dropdown>
        <p class="text">Бригада</p>
        <Dropdown v-model:selectedValue="teamSelected" :data="teams" :disableCondition="!isTeamEnabled"></Dropdown>
        <p class="text">Смена</p>
        <Dropdown v-model:selectedValue="shiftSelected" :data="shifts" :disableCondition="!isShiftEnabled"></Dropdown>
        <button :disabled="!isFormValid" type="submit" class="button">Отправить</button>
    </form>
</template>

<style scoped>
.text {
    font-size: 21px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 16px;
}

.button {
    width: 100%;
    padding: 8px 12px;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #333;
    background-color: #a1cdff;
    border: 1px solid #93c6ff;
    border-radius: 4px;
    box-shadow: 0 2px 4px #93c6ff;
    cursor: pointer;
    margin-top: 24px;
}

.button:hover {
    background-color: #7cb9ff;
}

.button[disabled] {
    color: #999;
    background-color: #cfcfcf;
    cursor: not-allowed;
}
</style>