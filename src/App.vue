<script setup>
import { onMounted, onUnmounted } from 'vue'
import Nav from './components/Nav.vue'

const updateBackgroundPosition = () => {
  document.body.style.backgroundPosition = `center ${window.scrollY * 0.4}px`
}

onMounted(() => {
  updateBackgroundPosition()
  window.addEventListener('scroll', updateBackgroundPosition, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBackgroundPosition)
})
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
</style>
