<template>
  <h3>Добро пожаловать на сайт</h3>
  <form @submit.prevent = "onSubmit">
    <span>Логин: </span>
    <input type="text" v-model="log" placeholder="Введите логин"><br>
    <span>Пароль: </span>
    <input type="password" v-model="pass" placeholder="Пароль должен содержать не менее 8 символов">
    <ErrorMessage
        v-bind:new-message="validateResult"
    ></ErrorMessage><br>
    <button @click="signIn">Войти</button>
    <button @click="signUp">Регистрация</button>
  </form>
</template>

<script>
import ErrorMessage from "@/components/pub/ErrorMessage";

export default {
  name: 'RegistrationForm',
  components: {
    ErrorMessage
  },
  data() {
    return{
      log: '',
      pass: '',
      validateResult: '',
      reqParam: ''
    }
  },
  methods: {
    validateForm(){
      this.validateResult = this.pass < 8 ? 'Слишком короткий пароль' : ''
    },
    pack(){
      return [this.log, this.pass, this.reqParam]
    },
    onSubmit(){
      this.validateForm()
      if (this.validateResult.length === 0){
        console.log('Success. Request on' + this.reqParam)
      }
    },
    signIn(){
      this.reqParam = 'signIn'
    },
    signUp(){
      this.reqParam = 'signUp'
    }
  }
}
</script>

<style scoped>
  form{
    width: 30%;
  }
  input[type="text"],input[type="password"] {
    margin: 4px;
    display: flex;
    width: 400px;
  }
  button {
    align-content: center;
    width: 100px;
    height: 20px;
    margin: 3px 0 0 10px;
  }
</style>