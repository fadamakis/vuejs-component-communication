<template>
  <ComponentB message="ping" @customEventName="handleCustomEvent" />
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
  components: {
    ComponentB
  },
  methods: {
    handleCustomEvent(payload) {
      console.log(`Custom event fired with data: ${payload}`);
    }
  }
};
</script>