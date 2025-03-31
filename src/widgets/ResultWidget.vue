<script>
import { useFormStore } from '@/stores/form';

export default {
    setup() {
        const data = useFormStore();
        return { data };
    },
};




</script>

<template>
    <div class="results">
        <div class="container">
            <h1 class="title">Ваши данные</h1>
            <div class="wrapper">
                <div v-if="data.formData && data.formData.city" class="text"><span class="span">Город:</span>
                    {{ data.formData.city }}</div>
                <div v-if="data.formData && data.formData.department" class="text"><span class="span">Цех:</span> {{
                    data.formData.department }}</div>
                <div v-if="data.formData && data.formData.employee" class="text"><span class="span">Сотрудник:</span> {{
                    data.formData.employee }}</div>
                <div v-if="data.formData && data.formData.team" class="text"><span class="span">Бригада:</span> {{
                    data.formData.team }}</div>
                <div v-if="data.formData && data.formData.shift" class="text"><span class="span">Смена:</span>
                    {{
                        data.formData.shift }}</div>
                <div v-else>Нет данных для отображения</div>
            </div>
        </div>
        <img src="../assets/images/worker.webp" alt="worker" class="image">
    </div>
</template>

<style scoped>
.results {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
}

.image {
    width: 500px;
    height: auto;
    object-fit: contain;
}

.title {
    color: #278cff;
    font-size: 46px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 16px;
}

.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.text {
    font-size: 24px;
    font-weight: 400;
    line-height: 26px;
    color: black;
}

.span {
    font-weight: 600;
}
</style>