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
  methods: {
    register() {
      this.$router.push({
        name: "EventDetails"
      })
    }
  }
}
</script>

<style>

</style>