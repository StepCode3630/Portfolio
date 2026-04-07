<script setup>
import { onMounted, onUnmounted } from 'vue'
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'

onMounted(() => {})
</script>

<template>
  <header>
    <nav>
      <Nav />
    </nav>
  </header>

  <main>
    <div class="home">
      <Home />
    </div>
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
  background: rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.home {
  margin: 0;
  padding: 0;
  margin-top: 130px;
}
</style>
