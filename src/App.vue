<template>
  <Head/>
  <RegistrationForm/>
</template>

<script>
import Head from '@/components/mainPage/Head.vue'
import RegistrationForm from "@/components/mainPage/RegistrationForm.vue"

export default {
  name: 'App',
  components: {
    Head, RegistrationForm
  }
}
</script>