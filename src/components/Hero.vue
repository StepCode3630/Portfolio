<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { icon } from '@/icon.js';

gsap.registerPlugin(ScrollTrigger);

const introSection = ref(null);
const introTitle = ref(null);


onMounted(() => {
  gsap.to(introTitle.value, {
    opacity: 0,
    scale: 2,
    ease: "none",
    scrollTrigger: {
      trigger: introSection.value,
      start: "top top",
      end: "center top",
      scrub: 1,
      pin: true,
      markers: false
    }
  });
});

</script>




<template>
  <div class="home">
    <div class="mouseWrap">
      <div class="mouse"></div>
      <p>Scroll</p>
    </div>
    <div class="homeContent">
      <section ref="introSection" class="homeMe">
        <h3 class="greeting">Hi, my name is</h3>
        <h1 ref="introTitle" class="name">
          Patricny <br />
          Stepan
        </h1>
      </section>
      <div class="socialLinks">
        <div class="socialIcons">
          <a href="https://github.com/StepCode3630" target="_blank" rel="noopener noreferrer">
            <img :src="icon('github')" alt="GitHub" class="icon" />
          </a>
          <a href="https://linkedin.com/in/stepan-patricny" target="_blank" rel="noopener noreferrer">
            <img :src="icon('linkedin')" alt="LinkedIn" class="icon" />
          </a>
        </div>
        <div class="description">
          <p class="description-intro">
            I’m a <strong>developer</strong> building intuitive, user-friendly applications.
          </p>
          <p>
            I work with <strong>JavaScript</strong> and <strong>C#</strong>, using Node.js and .NET
            to build web, desktop, and cross-platform solutions.
          </p>
          <p>
            Git, Docker, and Figma are part of my workflow. I’m always learning and refining my
            skills to create clean, efficient digital experiences.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.home {
  --color-scroll: var(--color-purple);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.homeMe {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}

.homeContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: -10rem;
  width: min(1200px, 100%);
  padding: 0 2rem;
}

.name {
  font-family: 'Archivo Black', sans-serif;
  color: var(--color-purple);
  font-size: clamp(4rem, 8vw, 13.7rem);
  font-weight: 900;
  width: max-content;
  line-height: 0.9;
  letter-spacing: -0.06em;
}

.greeting {
  font-family: 'Archivo', sans-serif;
  color: var(--color-purple);
  font-size: clamp(1.2rem, 2vw, 2.5rem);
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.description {
  font-family: 'Archivo', sans-serif;
  color: var(--color-purple);
  font-size: clamp(1rem, 1.1vw, 1.125rem);
  font-weight: 400;
  letter-spacing: normal;
  text-align: left;
  width: 100%;
  max-width: 56ch;
  margin-top: 2rem;
  padding: clamp(1.1rem, 2vw, 1.75rem);
  line-height: 1.75;
  border: 1px solid var(--color-purple);
  border-radius: 20px;
  background: var(--color-blue);
  box-shadow: 0 8px 32px color-mix(in srgb, var(--color-black) 10%, transparent);
}

.description p+p {
  margin-top: 0.9rem;
}

.description-intro {
  font-size: 1.125em;
  line-height: 1.5;
  font-weight: 500;
}

.description strong {
  color: var(--color-purple);
  font-weight: 700;
}

.icon {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;
  opacity: 0.7;
}

.icon:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.socialLinks {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.socialLinks a {
  margin: 10px;
}

.socialIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-direction: row;
}

.mouseWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: -10rem;
}

/* Responsive */
@media (max-width: 1600px) {
  .name {
    font-size: clamp(3.5rem, 7vw, 10rem);
  }
}

@media (max-width: 1300px) {
  .name {
    font-size: clamp(3rem, 6vw, 8rem);
  }
}

@media (max-width: 1100px) {
  .name {
    font-size: clamp(3rem, 8vw, 6rem);
  }

  .homeContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .homeMe {
    align-items: center;
    text-align: center;
  }

  .mouseWrap {
    display: none;
  }
}

/* Mobile-specific adjustments */
@media (max-width: 800px) {
  .homeContent {
    margin-top: 2rem;
    margin-bottom: 0;
    padding: 0 1.25rem;
  }

  .name {
    font-size: clamp(2.8rem, 14vw, 4.5rem);
    line-height: 1;
    text-align: center;
    width: 100%;
    word-break: break-word;
  }

  .greeting {
    font-size: 1.25rem;
    text-align: center;
    width: 100%;
  }

  .description {
    margin-top: 1rem;
  }

  .socialLinks a {
    margin: 0.5rem;
  }
}

@media (max-width: 420px) {
  .homeContent {
    margin-top: 1rem;
    margin-bottom: 0;
    padding: 0 0.75rem;
  }

  .name {
    font-size: clamp(2.5rem, 18vw, 3.5rem);
    line-height: 0.95;
    text-align: center;
    width: 100%;
    word-break: break-word;
  }

  .greeting {
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    letter-spacing: 0.08rem;
  }

  .icon {
    width: 28px;
    height: 28px;
  }
}

/* Animation scroollll */
.mouseWrap p {
  margin-top: 25px;
  letter-spacing: 12px;
  text-indent: 12px;
  color: var(--color-scroll);
  -webkit-animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
  animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
}

.mouse {
  background: var(--color-background) linear-gradient(transparent 0%, transparent 50%, var(--color-scroll) 50%, var(--color-scroll) 100%);
  position: relative;
  width: 52px;
  height: 88px;
  border-radius: 100px;
  background-size: 100% 200%;
  -webkit-animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
  animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
}

.mouse:before,
.mouse:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.mouse:before {
  width: 46px;
  height: 82px;
  background-color: var(--color-background-mute);
  border-radius: 100px;
}

.mouse:after {
  background-color: var(--color-yellow);
  width: 10px;
  height: 10px;
  border-radius: 100%;
  -webkit-animation: trackBallSlide 5s linear infinite;
  animation: trackBallSlide 5s linear infinite;
}

@-webkit-keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }

  20% {
    background-position: 0% 0%;
  }

  21% {
    background-color: var(--color-background-soft);
  }

  29.99% {
    background-color: var(--color-scroll);
    background-position: 0% 0%;
  }

  30% {
    background-color: var(--color-background-soft);
    background-position: 0% 100%;
  }

  50% {
    background-position: 0% 0%;
  }

  51% {
    background-color: var(--color-background-soft);
  }

  59% {
    background-color: var(--color-scroll);
    background-position: 0% 0%;
  }

  60% {
    background-color: var(--color-background-soft);
    background-position: 0% 100%;
  }

  80% {
    background-position: 0% 0%;
  }

  81% {
    background-color: var(--color-background-soft);
  }

  90%,
  100% {
    background-color: var(--color-scroll);
  }
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }

  20% {
    background-position: 0% 0%;
  }

  21% {
    background-color: var(--color-background-soft);
  }

  29.99% {
    background-color: var(--color-scroll);
    background-position: 0% 0%;
  }

  30% {
    background-color: var(--color-background-soft);
    background-position: 0% 100%;
  }

  50% {
    background-position: 0% 0%;
  }

  51% {
    background-color: var(--color-background-soft);
  }

  59% {
    background-color: var(--color-scroll);
    background-position: 0% 0%;
  }

  60% {
    background-color: var(--color-background-soft);
    background-position: 0% 100%;
  }

  80% {
    background-position: 0% 0%;
  }

  81% {
    background-color: var(--color-background-soft);
  }

  90%,
  100% {
    background-color: var(--color-scroll);
  }
}

@-webkit-keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}

@-webkit-keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(8px);
  }

  30% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }

  60% {
    transform: translateY(0);
  }

  80% {
    transform: translateY(8px);
  }

  90% {
    transform: translateY(0);
  }
}

@keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(8px);
  }

  30% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }

  60% {
    transform: translateY(0);
  }

  80% {
    transform: translateY(8px);
  }

  90% {
    transform: translateY(0);
  }
}

@-webkit-keyframes nudgeText {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(2px);
  }

  30% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(2px);
  }

  60% {
    transform: translateY(0);
  }

  80% {
    transform: translateY(2px);
  }

  90% {
    transform: translateY(0);
  }
}

@keyframes nudgeText {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(2px);
  }

  30% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(2px);
  }

  60% {
    transform: translateY(0);
  }

  80% {
    transform: translateY(2px);
  }

  90% {
    transform: translateY(0);
  }
}

@-webkit-keyframes colorText {
  21% {
    color: var(--color-background-soft);
  }

  30% {
    color: var(--color-scroll);
  }

  51% {
    color: var(--color-background-soft);
  }

  60% {
    color: var(--color-scroll);
  }

  81% {
    color: var(--color-background-soft);
  }

  90% {
    color: var(--color-scroll);
  }
}

@keyframes colorText {
  21% {
    color: var(--color-background-soft);
  }

  30% {
    color: var(--color-scroll);
  }

  51% {
    color: var(--color-background-soft);
  }

  60% {
    color: var(--color-scroll);
  }

  81% {
    color: var(--color-background-soft);
  }

  90% {
    color: var(--color-scroll);
  }
}
</style>
