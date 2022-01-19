<template>
  <div class="shell">
    <main-head/>
    <div class="sideMenu">
      <ul class="linkList">
        <li>
          <router-link to="/login" class="rLink">Войти</router-link>
        </li>
        <li>
          <router-link to="/register" class="rLink">Зарегистрироваться</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mainHead from '@/components/mainPage/mainHead'
export default {
  name: "Navigation",
  components: {mainHead}
}
</script>

<style scoped>
  .shell {
    font-family: Helvetica,sans-serif;
    color: snow;
  }
  .sideMenu {
    position: absolute;
    top: 0.5%;
    right: 5%;
  }
  ul> li {
    display: inline;
    padding: 10px;
  }
  .rLink {
    text-decoration: none;
    color: snow;
  }
  .rLink:hover {
    color: #b9b8b8;
  }
</style>