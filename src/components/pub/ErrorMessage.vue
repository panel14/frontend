<template>
  <span>{{changeMessage}}</span>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['newMessage'],
  computed: {
    changeMessage: function (){
      return this.newMessage
    }
  }
}
</script>

<style scoped>
  span {
    color: red;
    margin: 3px;
  }
</style>