<script setup>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue';
import Contact from './components/Contact.vue';

import { onMounted, onBeforeUnmount, ref } from "vue"
import gsap from "gsap"
const area = ref(null)
const light = ref(null)
let xTo
let yTo
const handleMouseMove = (event) => {
  xTo(event.clientX)
  yTo(event.clientY)
}
onMounted(() => {
  if (!area.value || !light.value)
    return
  xTo = gsap.quickTo(light.value, "x", {
    duration: 0.25, ease: "power3.out"
  })
  yTo = gsap.quickTo(light.value, "y", {
    duration: 0.25, ease: "power3.out"
  })
  area.value.addEventListener("mousemove", handleMouseMove)


})
onBeforeUnmount(() => { area.value?.removeEventListener("mousemove", handleMouseMove) })
</script>

<template>
  <div ref="area" class="page">
    <header>
      <nav>
        <Nav />
      </nav>
    </header>

    <div id="home" class="spacer">
      <Hero />
    </div>

    <div ref="light" class="cursor-effect"></div>

    <main>
      <AboutMe />
      <MyProjects />
      <Contact />
    </main>
  </div>
</template>


<style scoped>
.page {
  position: relative;
  min-height: 100vh;
}

.spacer {
  min-height: 100vh;
  background-image: url("/src/assets/fond-montagne.jpg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}

main {
  position: relative;
  background-color: var(--color-black);
}

.cursor-effect {
  position: fixed;
  top: -50px;
  left: -50px;
  z-index: 9999;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, var(--color-black) 0%, transparent 100%);
  filter: blur(8px);
  opacity: 0.85;
  box-shadow: 0 0 10px var(--color-black), 0 0 50px var(--color-black), 0 0 110px var(--color-black);
  mix-blend-mode: screen;
  will-change: transform;
}
</style>
