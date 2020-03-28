<template>
  <section>
    <p>Passed data: {{ message }}</p>
    <button @click="clickHandler">Send event</button>
  </section>
</template>

<script>
export default {
  props: ["message"],
  methods: {
    clickHandler() {
      this.$emit("customEventName", "pong");
    }
  }
};
</script>