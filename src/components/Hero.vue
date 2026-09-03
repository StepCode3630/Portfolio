<script setup></script>

<template>
  <div class="home">
    <div class="mouseWrap">
      <div class="mouse"></div>
      <p>Scroll</p>
    </div>
    <div class="homeContent">
      <div class="homeMe">
        <h3 class="greeting">Hi, my name is</h3>
        <h1 class="name">
          Patricny <br />
          Stepan
        </h1>
      </div>
      <div>
        <a href="https://github.com/StepCode3630" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)" fill="var(--color-black)" />
          </svg>
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
