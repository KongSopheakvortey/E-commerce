<template>
  <div class="Wrapper">
    <div class="Container">
      <CategoryComponent v-for="category in Categories" :key="category" 
      :color="category.color"  
      :name="category.name"
      :productCount="category.productCount"
      :image="category.image"
      />
    </div>

    <div class="PromotionContainer">
      <PromotionComponent v-for="promotion in Promotions" :key="promotion" 
      :color="promotion.color"  
      :title="promotion.title"
      :image="promotion.image"
      />
    </div>
  </div>

<RouterView/>
</template>

<script>
  import CategoryComponent from './components/Category.vue';
  import PromotionComponent from './components/Promotion.vue';
  import { RouterView } from 'vue-router';
  import axios from "axios";

  export default{
    components: {
        CategoryComponent,
        PromotionComponent
    },

    data() {
    return {
      Categories:[],
      Promotions:[],
    };
  },

  mounted(){
    this.fetchCategories(),
    this.fetchPromotions()
  },

  methods:{
    fetchCategories(){
      axios.get("http://localhost:3000/api/categories").then(result =>{
        this.Categories = result.data;
      })
    },
    fetchPromotions(){
      axios.get("http://localhost:3000/api/promotions").then(result =>{
        this.Promotions = result.data;
      })
    }
  }

  };


</script>

<style scoped>
.Wrapper{  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.PromotionContainer{
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>