<template>
  <form class="mainForm" @submit.prevent="onSubmit">
    <h2>Вход</h2>

    <input type="text" v-model="login" placeholder="Введите логин"><br>

    <input type="password" v-model="password" placeholder="Введите пароль"><br>

    <button>Войти</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: '',
      password: ''
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
      await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.pack())
      })
    }
  }
}
</script>

<style scoped>

</style>