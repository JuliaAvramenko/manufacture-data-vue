<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    selectedValue: string;
    data: string[];
    disableCondition: boolean;
}>();

const emit = defineEmits(['update:selectedValue']);


const selected = ref<string>(props.selectedValue);


watch(selected, (newValue) => {
    if (newValue !== props.selectedValue) {
        emit('update:selectedValue', newValue);
    }
});


watch(
    () => props.selectedValue,
    (newValue) => {
        if (newValue !== selected.value) {
            selected.value = newValue;
        }
    }
);
</script>

<template>
    <div id="v-model-select" class="dropdown">
        <select v-model="selected" :disabled="disableCondition" class="input">
            <option disabled hidden value="">Выберите один из вариантов</option>
            <option v-for="item in props.data" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
    </div>
</template>



<style scoped>
.dropdown {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;

    width: 300px;
    margin: 5px auto;
}

.input {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    color: #333;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
}

.input:disabled {
    cursor: not-allowed;
}


.input:hover {
    border-color: #4094F7;
    background-color: #eef6ff;
}

.dropdown span {
    font-size: 14px;
    color: #555;
    margin-top: 8px;
}


.input option {
    font-size: 14px;
    color: #333;
}


.input option[disabled] {
    color: #999;
}


.input:focus {
    outline: none;
    border-color: #4094F7;
    box-shadow: 0 0 6px rgba(64, 148, 247, 0.4);
}
</style>