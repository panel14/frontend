<template>
  <span>{{msg}}</span>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return{
      msg: 'Верзаков Александр Юрьевич, P3232, 312434'
    }
  }
}
</script>

<style scoped>
  span {
    font-family: Helvetica,sans-serif;
    font-size: 24px;
  }
</style>
