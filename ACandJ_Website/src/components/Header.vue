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
      watch:{
        $route() {
          this.switchNav();
        }
      },
      methods: {
        switchNav() {
          const path = this.$route.fullPath;
          if (path == "/") {
            this.isHome = true;
            this.isProducts = false;
            this.isContact = false;
          } else if (path.includes("/products")) {
            this.isHome = false;
            this.isProducts = true;
            this.isContact = false;
          } else if (path.includes("/contact")) {
            this.isHome = false;
            this.isProducts = false;
            this.isContact = true;
          }
        },
      },
      setup(props) {
        
      },
      mounted() {
        //navigation default is home
        this.switchNav();
      }
    }

</script>

<template>
  <nav class="navbar">
    <div class="homeLink centeredColumn">
      <router-link to="/" class="navButton"><h1>African Crafts & Jewellery</h1></router-link>
    </div>
  
    <div class="navLinks centeredColumn">
      <router-link to="/" class="navButton"><h3 :class="{ inactive: !isHome }">Home</h3></router-link>
      <router-link to="/products" class="navButton"><h3 :class="{ inactive: !isProducts }">Products</h3></router-link>
      <router-link to="/contact" class="navButton"><h3 :class="{ inactive: !isContact }">Contact</h3></router-link>
    </div>
  </nav>
</template>

<style scoped>  
  .collageImg {
    width: 70%;
    min-width: 200px;
  }
  .navbar {
    background-color: #db9336;
    padding: 1.5rem;
    display: flex;
  }
  .centeredColumn {
    flex: 50%;
  }
  .homeLink h1 {
    font-style: italic;
  }
  .navButton {
    display: inline-block;
    margin: 0 1rem;
    color: black;
    text-decoration: none;
  }
  .navLinks {
    text-align: end;
  }
  .inactive {
    font-weight: lighter;
  }
</style>
