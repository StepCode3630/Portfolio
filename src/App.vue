<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
  <header>
    <nav>
      <Nav />
    </nav>
  </header>

  <main></main>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
