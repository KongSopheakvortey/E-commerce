<template>
    <div class="Wrapper">
      <div class="Container">
        <CategoryComponent v-for="category in productStore.categories" :key="category" 
        :color="category.color"  
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
        />
      </div>
  
      <div class="PromotionContainer">
        <PromotionComponent v-for="promotion in productStore.promotions" :key="promotion" 
        :color="promotion.color"  
        :title="promotion.title"
        :image="promotion.image"
        />
      </div>
  
      <div class="Product">
        <ProductComponent v-for="product in productStore.products" :key="product"
        :promotionAsPercentage="product.promotionAsPercentage"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :rating="product.rating"
        :size="product.size"
        />
      </div>
    </div>
  
  </template>

<script>
import CategoryComponent from '@/components/Category.vue';
import PromotionComponent from '@/components/Promotion.vue';
import ProductComponent from '@/components/Product.vue';
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/ProductStore';
import { mapState } from 'pinia';

export default{
  components: {
      CategoryComponent,
      PromotionComponent,
      ProductComponent,
      currentGroupName: 'Group',
      
  },

  computed: {
  ...mapState(useProductStore, {
    popularProducts: 'getPopularProducts',  // Mapping the getter to `popularProducts`
    categories(store) {
      return store.getCategoriesByGroup(this.currentGroupName);  // Custom computed property to fetch categories by group
    },
    products(store) {
      return store.getProductsByGroup(this.currentGroupName);  // Custom computed property to fetch products by group
    },
    promotions(store) {
      return store.promotions;  // Directly accessing promotions from the store
    },
    groups(store) {
      return store.groups;  // Directly accessing groups from the store
    },
  }),
},

setup() {
  const productStore = useProductStore();

  onMounted(async () => {
      try {
        await productStore.fetchGroups();
        console.log("Groups:", productStore.groups);

        console.log("Fetching Categories...");
        await productStore.fetchCategories();
        console.log("Categories:", productStore.categories);

        console.log("Fetching Promotions...");
        await productStore.fetchPromotions();
        console.log("Promotions:", productStore.promotions);

        console.log("Fetching Products...");
        await productStore.fetchProducts();
        console.log("Products:", productStore.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    return {
      productStore,
    };
  }

// computed: {
//   categories() {
//     const productStore = useProductStore();
//     return productStore.getCategoriesByGroup(this.currentGroupName);
//     // return productStore.getProductsByGroup(this.currentGroupName);
//     // return productStore.getProductsByCategory(this.currentGroupName);
//     // return productStore.getPopularProducts(this.currentGroupName);
//   },
//   // categories() {
//   //   return this.productStore.categories; // Accessing categories directly from store
//   // },

//   // promotions() {
//   //   return this.productStore.promotions; // Access store promotions
//   // },
// }
};
</script>

<style scoped>
.Wrapper{  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  border: none;
}

.Container{
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  border: none;

}

.PromotionContainer{
  width: 80%;
  display: flex;
  justify-content: space-between;
}


.Product{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  margin-top: 30px;
}
</style>