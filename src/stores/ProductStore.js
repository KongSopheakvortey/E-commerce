import { defineStore } from "pinia"
import axios from "axios";
export const useProductStore = defineStore('product', {
    state: () => ({
         groups: [],
         promotions: [],
         categories: [],
         products: []
    }),
    getters: {
      getCategoriesByGroup: (state) => {
          return (groupName) => state.categories.find((category) => category.group === groupName)
      },
      getProductsByGroup: (state) => {
          return (groupName) => state.products.find((product) => product.group === groupName)
      },
      getProductsByCategory: (state) => {
          return (categoryId) => state.categories.find((category) => category.group === categoryId)
      },
      getPopularProducts: (state) => {
          return (state.products.find((product) =>  product.countSold >= 10))
      },
    },
    actions: {
      async fetchCategories() {
        try {
          const response = await axios.get('http://localhost:3000/api/categories');
          this.categories = response.data;
          console.log(this.categories);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      },

      async fetchPromotions() {
        try {
          const response = await axios.get('http://localhost:3000/api/promotions');
          this.promotions = response.data;
          console.log(this.promotions);

        } catch (error1) {
          console.error1('Error fetching promotions:', error1);
        }
      },

      async fetchProducts() {
          try {
            const response = await axios.get('http://localhost:3000/api/products');
            this.products = response.data;
          } catch (error2) {
            console.error2('Error fetching products:', error2);
          }
        },

        async fetchGroups() {
          try {
            const response = await axios.get('http://localhost:3000/api/groups');
            this.groups = response.data;
          } catch (error3) {
            console.error3('Error fetching groups:', error3);
          }
        },
    },
    
  }) 




