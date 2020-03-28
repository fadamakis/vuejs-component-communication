<template>
  <ComponentC :message="message" @customEventName="handleCustomEvent" />
</template>

<script>
import ComponentC from "./ComponentC.vue";
export default {
  props: ["message"],
  components: {
    ComponentC
  },
  methods: {
    handleCustomEvent(payload) {
      this.$emit("customEventName", payload);
    }
  }
};
</script>