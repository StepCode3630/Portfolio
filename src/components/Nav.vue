<script setup></script>

<template>
  <div class="wrapper">
    <div>
      <a href="">Patricny Stepan</a>
      <p>Developer full stack</p>
    </div>
    <div>
      <a href="">Experience</a>
      <a href="">Projects</a>
      <a href="">Contact</a>
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
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
}
</style>
