<script>
import FormWidget from '@/widgets/FormWidget.vue';

export default {
    name: "HomePage",
    components: {
        FormWidget,
    },
};
</script>

<template>
    <div class="home">
        <FormWidget></FormWidget>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/plant.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>