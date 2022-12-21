<script>
    export default {
      props: {
        
      },
      data() {
        return {
        };
      },
      methods: {
        
      },
      setup(props) {
        
      },
      mounted() {
        
      }
    }

</script>

<template>
  <div class="row">
    <div class="centeredColumn">
      <h1>Welcome</h1>
    </div>
    <div class="centeredColumn">
      <img src="../assets/img/IMG_1566.JPG" alt="Picture of African craft or jewellery" class="collageImg"/>
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
    text-align: center;
  }
  .collageImg {
    width: 70%;
    min-width: 200px;
  }
</style>
