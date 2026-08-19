<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const header = [
  { text: 'About me', href: '#aboutMe' },
  { text: 'Skills', href: '#skills' },
  { text: 'My projects', href: '#work' },
  { text: 'Contact', href: '#contact' },
]


const headerEl = ref(null);
let ctx;
const THRESHOLD = -670; // X pixels





onMounted(() => {
  // Animation starting point
  gsap.set(headerEl.value, { yPercent: 100 });

  ctx = gsap.context(() => {
    gsap.to(headerEl.value, {
      yPercent: -1167,
      duration: 0.35,
      ease: "power3",
      scrollTrigger: {
        trigger: headerEl.value,
        start: `top+=${THRESHOLD} top`,
        end: "max",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  })
});

onBeforeUnmount(() => {
  if (ctx)
    ctx.revert();
});
</script>

<template>
  <div ref="headerEl" class="wrapper" aria-label="Navigation principal">
    <nav class="nav">
      <ul class="nav__list">
        <li v-for="(item, index) in header" :key="index" class="nav__item">
          <a :href="item.href" class="nav__link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -15%);
  z-index: 20;
  width: max-content;
  will-change: transform;
}

.nav__list {
  list-style: none;
  padding: 0.9rem 1.4rem;
  margin: 0;
  background: rgba(255, 217, 0, 0.18);
  border: 1px solid rgba(255, 217, 0, 0.4);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.nav__list:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.16);
}

.nav__list a {
  text-decoration: none;
  color: var(--color-purple);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  border-radius: 100px;
}

.nav__list a:hover {
  color: var(--color-yellow);
  background-color: rgba(255, 217, 0, 0.18);
  border-radius: 100px;
}
</style>
