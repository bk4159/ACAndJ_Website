<script>
    export default {
      props: {
        
      },
      data() {
        return {
          isHome: false,
          isProducts: false,
          isContact: false
        };
      },
      methods: {
        switchNav(navNum) {
          //highlight proper navigation
          switch(navNum) {
            case 1:
              this.isHome = true;
              this.isProducts = false;
              this.isContact = false;
              break;
            case 2:
              this.isHome = false;
              this.isProducts = true;
              this.isContact = false;
              break;
            case 3:              
              this.isHome = false;
              this.isProducts = false;
              this.isContact = true;
              break;
            default:
              break;
          }
        },
      },
      setup(props) {
        
      },
      mounted() {
        //highlight proper navigation
        this.switchNav(1);
      }
    }

</script>

<template>
  <nav class="navbar">
    <div class="homeLink">
      <a class="navButton" @click="switchNav(1)"><h1>African Crafts & Jewellery</h1></a>
    </div>
  
    <div class="navLinks">
      <a class="navButton" @click="switchNav(1)"><h3 :class="{ inactive: !isHome }">Home</h3></a>
      <a class="navButton" @click="switchNav(2)"><h3 :class="{ inactive: !isProducts }">Products</h3></a>
      <a class="navButton" @click="switchNav(3)"><h3 :class="{ inactive: !isContact }">Contact</h3></a>
    </div>
  </nav>
</template>

<style scoped>
  /*Navigation bar*/
  .navbar {
      background-color: #db9336;
      padding: 1.5rem;
      overflow: auto;
  }
  .homeLink {
    float: left;
  }
  .homeLink h1 {
    font-style: italic;
    cursor: pointer;
  }
  .navLinks {
    float: right;
  }
  .navLinks .navButton {
    display: inline-block;
    margin: 0 1rem;
    cursor: pointer;
  }
  .inactive {
    font-weight: lighter;
  }
</style>
