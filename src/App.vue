<template>
  <Navigation/>
  <router-view/>
</template>
<script>

import Navigation from "@/components/mainPage/Navigation";
export default {
  components: {Navigation}
}
</script>

<style>
  form {
    box-sizing: border-box;
    font-family: Helvetica sans-serif;
  }
  input[type="text"], input[type="password"] {
    width: 15%;
    padding: 10px;
    margin: 10px 0;
    border: 0;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }
  button {
    width: 15%;
    padding: 7px;
    border: none;
    border-radius: 10px;
    background-color: #0366d6;
    color: snow;
  }
  button:hover {
    background-color: #0171f1;
  }
</style>