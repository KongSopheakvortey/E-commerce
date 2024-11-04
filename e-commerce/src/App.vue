<template>
  <div class="Wrapper">
    <div class="Container">
      <CategoryComponent 
        color="#F2FCE4" 
        name="Hamburger"
        quantity="14 items"    
        :picture="HamburgerImg"
      />

      <CategoryComponent 
        color="#FFFCEB" 
        name="Peach"
        quantity="17 items"    
        :picture="PeachImg"
      />

      <CategoryComponent 
        color="#ECFFEC" 
        name="Oganic Kiwi"
        quantity="21 items"    
        :picture="KiwiImg"
      />

      <CategoryComponent 
        color="#FEEFEA" 
        name="Red Apple"
        quantity="68 items"    
        :picture="AppleImg"
      />

      <CategoryComponent 
        color="#FFF3EB" 
        name="Snack"
        quantity="34 items"    
        :picture="SnackImg"
      />

      <CategoryComponent 
        color="#FFF3FF" 
        name="Black plum"
        quantity="25 items"    
        :picture="PlumImg"
      />

      <CategoryComponent 
        color="#F2FCE4" 
        name="Vegetable"
        quantity="65 items"    
        :picture="VegetableImg"
      />

      <CategoryComponent 
        color="#FFFCEB" 
        name="Headphone"
        quantity="33 items"    
        :picture="HeadphoneImg"
      />

      <CategoryComponent 
        color="#F2FCE4" 
        name="Chocolate"
        quantity="54 items"    
        :picture="ChocolateImg"
      />

      <CategoryComponent 
        color="#FFF3FF" 
        name="Orange"
        quantity="63 items"    
        :picture="OrangeImg"
      />
    </div>

    <div class="PromotionContainer">
      <Promotion
        color="#F0E8D5"
        text="Everyday Fresh & Clean with Our Products"
        :picture="OnionImg"
      />

      <Promotion
        color="#F3E8E8"
        text="Make your Breakfast Healthy and Easy"
        :picture="JuiceImg"
      />

      <Promotion
        color="#E7EAF3"
        text="The best Organic Product Online"
        :picture="OrganicVeggiImge"
      />
    </div>
  </div>


</template>

<script>
  import HamburgerImg from '@/assets/Image/Hamburger.png';
  import PeachImg from '@/assets/Image/Peach.png';
  import KiwiImg from '@/assets/Image/Kiwi.png';
  import AppleImg from '@/assets/Image/Apple.png';
  import SnackImg from '@/assets/Image/Snack.png';
  import PlumImg from '@/assets/Image/BlackPlum.png';
  import VegetableImg from '@/assets/Image/Vegetable.png';
  import HeadphoneImg from '@/assets/Image/Headphone.png';
  import ChocolateImg from '@/assets/Image/Chocolate.png';
  import OrangeImg from '@/assets/Image/Orange.png';
  import OnionImg from '@/assets/Image/Onion.png';
  import JuiceImg from '@/assets/Image/Juice.png';
  import OrganicVeggiImge from '@/assets/Image/OrganicVeggie.png';

  import CategoryComponent from './components/Category.vue';
  import Promotion from './components/Promotion.vue';

  export default{
    // name:'App',
    components: {
      CategoryComponent,
      Promotion,
    },
    
    data() {
    return {
      HamburgerImg, 
      PeachImg,
      KiwiImg,
      AppleImg,
      SnackImg,
      PlumImg,
      VegetableImg,
      HeadphoneImg,
      ChocolateImg,
      OrangeImg,
      OnionImg,
      JuiceImg,
      OrganicVeggiImge,
    };
  },
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
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.PromotionContainer{
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
</style>