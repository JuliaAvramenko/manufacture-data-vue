import { ref } from "vue";

type Department = {
    id: string;
    department: string[];
};

type Employee = {
    id: string;
    employee: string[];
};

export const departments = ref<Department[]>([
    {
        id: "Москва",
        department: ['A', 'B', 'C']
    },

    {
        id: "Смоленск",
        department: ['D', 'E']
    },

    {
        id: "Ростов",
        department: ['F', 'G']
    }
])

export const employees = ref<Employee[]>([
    {
        id: 'A',
        employee: ['Cидоров', 'Иванов']
    },
    {
        id: 'B',
        employee: ['Заносов', 'Бычков']
    },
    {
        id: 'C',
        employee: ['Cеров', 'Заморских']
    },
    {
        id: 'D',
        employee: ['Волков', 'Зайцев']
    },
    {
        id: 'E',
        employee: ['Черных', 'Пушкин']
    },
    {
        id: 'F',
        employee: ['Cонных', 'Петров']
    },
    {
        id: 'G',
        employee: ['Виноградов', 'Любимов']
    },
])

export const teams = ['первая', 'вторая', 'третья', 'четвертая', 'пятая']
export const shifts = ['дневная', 'ночная']
