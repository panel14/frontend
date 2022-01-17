<template>
  <span>{{changeMessage}}</span>
</template>

<script>
export default {
  name: 'ErrorMessage',
  data(){
    return{
      message: null
    }
  },
  props: ['newMessage'],
  computed: {
    changeMessage: function (){
      this.message = this.newMessage
      return this.message
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