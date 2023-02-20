<template>
  <div class="row">
    <div class="centeredColumn textWhite">
      <h1 class="italicText titleText">Welcome</h1>
      <h1 class="italicText jamboText">Jambo</h1>
      <h4 class="italicText welcomeText">Crafts and Jewellery handmade in Kenya</h4>
      <div>
        <router-link to="/products" class="navButton">View Products</router-link>
        <router-link to="/contact" class="navButton">Contact Us</router-link>
      </div>
    </div>
    <div class="centeredColumn paddedColumn">
      <div class="imagesRow">
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
      </div>
      <div class="imagesRow">
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
      </div>
      <div class="imagesRow">
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
        <img src="../assets/img/IMG_1566.jpg" alt="Picture of African craft or jewellery" class="collageImg"/>
      </div>
    </div>
  </div>  
</template>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .centeredColumn {
    flex: 50%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0.5rem;
    text-align: center;
  }
  .paddedColumn {
    padding: 1rem 0;
  }
  .textWhite {
    color: white;
  }
  .italicText {
    font-style: italic;
  }
  .titleText {
    font-size: 10vw;
    font-weight: 600;
  }
  .jamboText {
    text-decoration: overline;
    font-size: 2.5rem;
    font-weight: 600;    
  }
  .welcomeText {
    font-weight: lighter;
    font-size: 1.5rem;
    padding: 0.7rem 0;
  }
  .navButton {
    display: inline-block;
    background-color: #d49a48;
    padding: 0.5rem 1rem;
    margin: 1.5rem 1.5rem 0 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    color: white;
    border-radius: 0.3rem;
  }
  .collageImg {
    width: 40%;
    min-width: 150px;
    margin: 0.5rem;
    border: 0.1rem solid white;
    border-radius: 0.2rem;
  }
  @media (max-width: 576px) {
    .centeredColumn {
      flex: auto;
    }
    .collageImg {
      width: 80%;
    }
  }
</style>
