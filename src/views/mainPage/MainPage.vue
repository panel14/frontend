<template>
  <div class="mainContainer">
    <div class="formContainer">
      <form @submit.prevent="onSubmit">
        <span class="formHeader">Введите данные</span><br>
        X:
        <label v-for="value in values">
          <input type="radio" v-model="selectedValue" name="xValues"/>
          {{ value.num }}
        </label><br>
        Y:
        <input type="text" placeholder="(-5; 5)"/><br>
        R:
        <label v-for="value in values">
          <input type="radio" v-model="selectedValue" name="yValues"/>
          {{ value.num }}
        </label><br>
        <button>Отправить</button>
      </form>
    </div>
    <div class="dataTable">
      <table>
        <caption>Результаты</caption>
        <tr>
          <th>X</th>
          <th>Y</th>
          <th>R</th>
          <th>Попадание</th>
          <th>Время</th>
          <th>Время обработки</th>
        </tr>
      </table>
    </div>
    <div class="graph">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>

export default {
  name: "mainPage",
  data(){
    return {
      values: [
        { num: '-5'},
        { num: '-4'},
        { num: '-3'},
        { num: '-2'},
        { num: '-1'},
        { num: '0'},
        { num: '1'},
        { num: '2'},
        { num: '3'}
      ],
      selectedValue: null,
    }
  },
  methods: {
    onSubmit(){
      console.log('Э куда')
    }
  }
}
</script>

<style>
  .formContainer {
    width: 50%;
    float: left;
    display: block;

  }
  .dataTable {
    width: 50%;
    float: right;
  }
  .formHeader {
    font-size: 20px;
  }
  .graph {
    width: 20%;
    top: 10px;
  }
  table {
    font-size: 20px;
    width: 100%;
  }
  canvas {
    width: 400px;
    height: 400px;
    border: solid 2px black;
    margin: 20px 0 0 0 ;
  }
</style>