pol<template>
  <section>
    <ComponentB @customEventName="handleCustomEvent" />
    <ComponentC :message="message" />
  </section>
</template>

<script>
import ComponentB from "./ComponentB.vue";
import ComponentC from "./ComponentC.vue";
export default {
  data() {
    return {
      message: "ping"
    };
  },
  components: {
    ComponentB,
    ComponentC
  },
  methods: {
    handleCustomEvent(payload) {
      console.log(`Custom event fired with data: ${payload}`);
      this.message = payload;
    }
  }
};
</script>