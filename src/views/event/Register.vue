<template>
  <p>Register fot the event here.</p>
  <button @click="register">Register Me</button>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage = `You are successfully registered for ${this.event.title}`;
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "EventDetails"
      })
    }
  }
}
</script>

<style>

</style>