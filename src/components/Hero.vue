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
        <a href="https://github.com/StepCode3630" target="_blank" rel="noopener noreferrer">
          <img :src="icon('github')" alt="GitHub" class="icon" />
        </a>
        <a href="https://linkedin.com/in/stepan-patricny" target="_blank" rel="noopener noreferrer">
          <img :src="icon('linkedin')" alt="LinkedIn" class="icon" />
        </a>
        <p class="description">
          I am a passionate <strong>developer</strong> who enjoys building modern, intuitive, and user-friendly
          applications.
          I work with JavaScript and C#, using technologies such as <strong>Node.js</strong>, <strong>.NET
            frameworks</strong> and some other frameworks
          to create web, desktop, and cross-platform solutions. I also use tools like
          Git, Docker, and Figma throughout my development workflow. I am constantly learning new
          technologies and improving my skills to build clean, efficient, and meaningful digital experiences.
        </p>
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
  margin-top: 5rem;
  margin-bottom: -10rem;
}

.name {
  font-family: 'Archivo Black', sans-serif;
  color: var(--color-purple);
  font-size: 13.7rem;
  font-weight: 900;
  width: max-content;
}

.greeting {
  font-family: 'Archivo', sans-serif;
  color: var(--color-purple);
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.description {
  font-family: 'Archivo', sans-serif;
  color: var(--color-black);
  opacity: 0.7;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-align: center;
  max-width: 600px;
  margin-top: 2rem;
  animation: 0s ease 0s 1 normal forwards running none;
}

.description strong {
  color: var(--color-purple);
  font-weight: 670;
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

.socialLinks a {
  margin: 10px;
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



p {
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
