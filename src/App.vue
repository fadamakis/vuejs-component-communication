<template>
  <div id="app">
    <article>
      <h2>Simple components</h2>
      <partA />
    </article>
    <article>
      <h2>Chain components</h2>
      <partB />
    </article>
    <article>
      <h2>Siblings components</h2>
      <partC />
    </article>
    <article>
      <h2>Event Bus</h2>
      <partDa />
      <partDb />
    </article>
    <article>
      <h2>Vuex</h2>
      <partE />
    </article>
  </div>
</template>

<script>
import partA from "./components/2-components/ComponentA.vue";
import partB from "./components/3-components-chain/ComponentA.vue";
import partC from "./components/3-components-siblings/ComponentA.vue";
import partDa from "./components/event-bus/ComponentA.vue";
import partDb from "./components/event-bus/ComponentB.vue";
import partE from "./components/vuex/ComponentA.vue";

export default {
  name: "app",
  components: {
    partA,
    partB,
    partC,
    partDa,
    partDb,
    partE
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
article {
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 3px dotted #ccc;
}
</style>
