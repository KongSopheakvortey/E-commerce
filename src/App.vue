<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Page from './views/Page.vue';

export default{
    components:{
      Header,
      Footer,
      Page,
    }
  }
</script>

<style scoped>

</style>
