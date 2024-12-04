<template>
    <div class="ProductContainer" > 
        <div class="box">{{ promotionAsPercentage }}</div>
        <img :src="image" alt="item picture" width="100px" style="display: flex; align-self: center;" />
        <div class="productDetails">
            <span style="font-size: 7px; color: #B6B6B6">Hodo Foods</span>
            <span style="font-size: 9px; font-weight: bold; color: #253D4E;">{{ name }}</span>
            <span class="box1">
                <span style="color: yellow;">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span >(4.0)</span>
            </span>
            <span style="font-size: 8px; color: #B6B6B6">{{ size }}</span>
            <div class="PriceCompartment">
                <span style="display: flex; flex-grow: 1; align-items: end;">
                    <span style="font-size: 11px; color: #3BB77E; font-weight: bold; padding-right: 3px;">${{ price }}</span> 
                    <span style="font-size: 8px; color:#B6B6B6"><del>$2.00</del></span>
                </span>
                <button class="btnAdd" >Add +</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        rating: Number,
        size: String,
        price: Number,
        image: String,
        promotionAsPercentage: Number,
    },


};
</script>

<style>
.ProductContainer{
    display: flex;
    flex-direction: column;
    color: #253D4E;

    height: 210px;
    width: 160px;
    border: solid 1px black;
    border-radius: 8px;
    background-color: white;
    font-family: sans-serif;
}

.productDetails{
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px;
    height: 130px;
}

.PriceCompartment{
    display: flex;
    align-items: end;
    margin-top: 3px;
    margin-bottom: 5px;
}

.box{
    width: 30px;
    height: 20px;
    background-color: skyblue;
    color: white;
    font-size: 8px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 10px;
    margin-bottom: 2px;
}
.box1{
    font-size: 7px;
    color: #B6B6B6;
}

.btnAdd{
    height: 15px;
    width: 40px;
    font-size: 10px;
    background-color: #bbffe4;
    border: solid 1px ;
    border-radius: 3px;
    color: #009a62;
}

</style>
  