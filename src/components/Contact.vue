<template>
  <div class="contactRow col p-2 text-center text-white content colVerticalCenter">
    <div class="contactBox">
      <h1 class="titleText">Contact Us!</h1>
      <img src="../assets/icons/email_icon.svg" alt="Email icon" class="emailIcon"/>
      <h4 class="emailText">
        Send an email to <a id="emailLink" href="mailto:acraftsandjewellery@gmail.com" target="_blank" rel="noopener noreferrer" class="contactEmail">acraftsandjewellery@gmail.com</a>
      </h4>
    </div>    
  </div>
</template>

<style scoped>
  .contactRow {
    display: flex;
    text-align: center;
    color: white;
    justify-content: center;
    align-items: center;
  }
  .contactBox {
    border: 0.25rem solid white;
    border-radius: 1.5rem;
    padding: 1rem;
    width: 90%;
  }
  .titleText {
    font-size: 3rem;
  }
  .emailIcon {
    /* make svg icon the colour white */
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(195deg) brightness(108%) contrast(101%);
    width: 3rem;
    /* adjust icon placement */
    position: relative;
    top: 1rem;
    margin-right: 0.5rem;
  }
  .emailText {
    display: inline-block;
    font-size: 1.5rem;
  }
  .contactEmail {
    color: #d49a48;
    word-break: break-all;
  }
</style>
