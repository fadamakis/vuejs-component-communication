<template>
  <dl>
    <dt> Local State : {{ localStateVariable }} <button @click="increment">Increment</button></dt>
    <dt> Global State : {{ globalStateVariable }} <button @click="increamentGlobal">Increment</button></dt>
  </dl>
</template>

<script>
import store from "./store/store";
export default {
  data() {
    return {
      localStateVariable: 5
    };
  },
  computed: {
    globalStateVariable() {
      return store.state.globalStateVariable;
    }
  },
  methods: {
    increment() {
      this.localStateVariable++;
    },
    increamentGlobal() {
      store.commit("INCREMENT");
    }
  }
};
</script>