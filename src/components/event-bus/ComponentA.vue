<template>
  <button @click="clickHandler">Send event</button>
</template>

<script>
import eventBus from "./event-bus";

export default {
  methods: {
    clickHandler() {
      eventBus.$emit("customEventName", "ping");
    }
  }
};
</script>