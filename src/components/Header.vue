<template>
    <div class="headerContainer">
        <p class="headerTitle">Header</p>
        <div class="PageTitle">
            <router-link :to="{ name: 'page', params: { nb: '1' } }" class="page">Page 1</router-link>
            <router-link :to="{ name: 'page', params: { nb: '2' } }" class="page">Page 2</router-link>
            <router-link :to="{ name: 'page', params: { nb: '3' } }" class="page">Page 3</router-link>

        </div>
    </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
</script>

<style>
.headerContainer{
    display: flex;
    align-items: center;
    border: 1px solid black;
}

.headerTitle{
    display: flex;
    flex-grow: 1;
}

.PageTitle{
    display: flex;
    justify-content: space-evenly;
    width: 200px;
}

.page.router-link-active {
  color: red;
  font-weight: bold;
}
</style>