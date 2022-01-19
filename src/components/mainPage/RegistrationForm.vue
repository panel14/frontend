<template>
  <h3>Вход</h3>
  <form @submit.prevent = "onSubmit">
    <span>Логин: </span>
    <input type="text" v-model="log" placeholder="Введите логин"><br>
    <span>Пароль: </span>
    <input type="password" v-model="pass" placeholder="Пароль должен содержать не менее 8 символов">
    <ErrorMessage
        v-bind:new-message="errorLog"
    ></ErrorMessage><br>
    <button @click="isSignIn = true">Войти</button>
    <button @click="isSignIn = false">Регистрация</button>
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
      errorLog: '',
      isSignIn: true
    }
  },
  methods: {
    regError(err) {
      this.errorLog = ''
      this.errorLog += err
    },
    validateForm() {
      let err = ''
      err += this.log.length === 0 ? 'Поле логина не может быть пустым\n' : ''
      err += this.pass.length < 8 ? 'Слишком короткий пароль\n' : ''
      this.regError(err)
    },
    pack(){
      return {
        login: this.log,
        password: this.pass
      }
    },
    onSubmit(){
      this.validateForm()
      if (this.errorLog.length === 0){

        if (this.isSignIn){
          this.signIn()
        } else {
          this.signUp()
        }
      }
    },
   async signIn(){
      try {
        const data = (await this.$api.auth.signIn(this.pack())).data
      } catch (error){
        this.regError(error.response.data)
      }
    },
    async signUp(){
      try {
        const data = (await this.$api.auth.signUp(this.pack())).data
      } catch (error){
        this.regError(error.response.data)
      }
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