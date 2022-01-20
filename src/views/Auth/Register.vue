<template>
  <div class="mainForm">
    <form @submit.prevent="onSubmit">
      <h2>Регистрация</h2>

      <input v-model="login" type="text" placeholder="Введите логин"><br>

      <input v-model="password" type="password" placeholder="Введите пароль"><br>

      <button>Зарегистрироваться</button><br>
      <ErrorMessage
          v-bind:message="errToShow"
      ></ErrorMessage>
    </form>
  </div>
</template>

<script>
import ErrorMessage from "@/components/mainPage/ErrorMessage";

export default {
  name: "Register",
  components: {ErrorMessage},
  data(){
    return{
      login: '',
      password: '',
      errToShow: ''
    }
  },
  methods: {
    pack(){
      return {
        login: this.login,
        password: this.password
      }
    },
    async onSubmit(){
      try {
        await this.$api.auth.signUp(this.pack())
        await this.$router.push('/login')
      } catch (error) {
        this.errToShow = error.response.data
      }
    }
  }
}
</script>

<style >
  .errorMessage {
    font-size: 20px;
    color: #8a0404;
  }
</style>