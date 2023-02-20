<template>
  <div class="products">
    <div class="productCard" v-for="n in 10">
      <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="cardImg"/>
      <h2 class="cardText">Name</h2>
      <h2 class="cardText priceText">$Price</h2>
    </div>
    
</div>
</template>

<style scoped>
  .products {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
  .productCard {
    border: 0.25rem solid white;
    border-radius: 1.5rem;
    padding: 1rem;
    margin: 1rem;
  }
  .cardImg {
    width: 25vw;
    min-width: 150px;
  }
  .cardText {
    padding: 0.5rem;
    font-weight: 700;
  }
  @media (max-width: 576px) {
    .cardImg {
      width: 70vw;
    }
  }
</style>
