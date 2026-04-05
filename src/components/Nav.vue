<script setup></script>

<template>
  <div class="wrapper">
    <div>
      <a href="">Patricny Stepan</a>
      <p>Developer full stack</p>
    </div>
    <div>
      <p>Experience</p>
      <p>Projects</p>
      <p>Contact</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.wrapper > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}
</style>
