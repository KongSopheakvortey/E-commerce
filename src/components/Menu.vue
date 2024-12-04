<template>
    <div class="Container">
        <span class="title">{{ title }}</span>
        <div class="Categories">
            <span>All</span>
            <span>Milks & Dairies</span>
            <span>Coffee & Tea</span>
            <span>Pet Foods</span>
            <span>Meats</span>
            <span>Vegetables</span>
            <span>Fruits</span>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        title: String,
    },
}
</script>

<style>
.Container{
    display: flex;
}

.title{
    display: flex;
    flex-grow: 1;
}

.Categories{
    display: flex;
    flex-grow: 2;
}
</style>

