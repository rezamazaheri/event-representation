<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>