<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <div>count is {{ count }}</div>
    <div @click="add">add</div>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Composite />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Composite from './components/Composite.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Composite,
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
