<script setup></script>

<template>
  <div class="home">
    <h1 class="name">
      Patricny <br />
      Stepan
    </h1>
    <div class="mouseWrap">
      <div class="mouse"></div>
      <p>Scroll</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  --color-scroll: var(--color-purple);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.name {
  font-family: 'Archivo Black', sans-serif;
  color: var(--color-purple);
  font-size: 13.7rem;
  font-weight: 900;
  width: max-content;
  transform: translateY(5%) translateX(5%);
}

.mouseWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
