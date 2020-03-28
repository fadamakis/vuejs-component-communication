<template>
  <section></section>
</template>

<script>
import eventBus from "./event-bus";

export default {
  created() {
    eventBus.$on("customEventName", payload => {
      console.log(`Custom event fired with data: ${payload}`);
    });
  }
};
</script>