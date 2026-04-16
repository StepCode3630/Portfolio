<script setup></script>

<template>
  <div class="wrapper" aria-label="Navigation principale">
    <div class="brand">
      <a class="brand__name" href="#home">Patricny Stepan</a>
      <p class="brand__role">Développeur full‑stack</p>
    </div>
    <div class="links">
      <a href="#experience">Expérience</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 20px;
}

.brand__name {
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.brand__role {
  opacity: 0.8;
  font-size: 0.95rem;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  padding: 14px 20px;
  white-space: nowrap;
}

@media (max-width: 700px) {
  .wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .links {
    padding-top: 0;
    flex-wrap: wrap;
    gap: 12px 16px;
  }
}
</style>
