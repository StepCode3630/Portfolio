<script setup>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
</script>

<template>
  <header>
    <nav>
      <Nav />
    </nav>
  </header>

  <main>
    <Home />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: var(--glass-bg);
  border-bottom: 1px solid var(--glass-border);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}
</style>
