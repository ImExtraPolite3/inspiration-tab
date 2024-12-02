<template>
  <div id="popup">
    <h1>Vue 3 Chrome Extension</h1>
    <button @click="handleClick">Click Me!</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('Button clicked!')
    },
  },
}
</script>

<style>
#popup {
  width: 300px;
  height: 200px;
}
</style>
