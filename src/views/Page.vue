<template>
    <div class="Page1Container">
        <div class="MenuComponent">
            <p class="section">Menu</p>
            <router-link :to="{ name: 'section', params: { id: '1' } }" class="section">Section 1</router-link>
            <router-link :to="{ name: 'section', params: { id: '2' } }" class="section">Section 2</router-link>
            <router-link :to="{ name: 'section', params: { id: '3' } }" class="section">Section 3</router-link>
            <router-link :to="{ name: 'section', params: { id: '4' } }" class="section">Section 4</router-link>
        </div>
        <div class="PageContent">
            Welcome to Page {{ nb }}
            <RouterView/>
        </div>
    </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
export default {
  computed: {
    nb() {
      return this.$route.params.nb;
    },
  }
};
</script>

<style>
.Page1Container{
    height: 400px;
    width: 100%;
    display: flex;
    border: 1px solid black;
}
.MenuComponent{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
}

.section{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    /* height: 50px; */
    padding: 10px 0;
    width: 100%;
    margin: 0;
}

.PageContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.section.router-link-active {
  background-color: aliceblue;
  outline: black;
  border-radius: 5px;
  font-weight: bold;
}
</style>