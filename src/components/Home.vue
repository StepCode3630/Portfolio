<script setup></script>

<template>
  <div class="wrapper">
    <div>
      <p id="creativThing">Creative</p>
      <p id="devThing">Developer</p>
    </div>
    <div>
      <p>
        Hi, I'm Patricny Stepan. I am a junior developer, I combine creativity and code to create
        something cool in a simple and effective way. I am specialized in web development in
        particular in
        <a href="https://adonisjs.com/" target="_blank" rel="noopener noreferrer">AdonisJs</a> et
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJs</a>, but I am
        also interested in game development and mobile applications.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.wrapper div {
  background-color: rgba(204, 168, 83, 0.23); /* Couleur semi-transparente */
  backdrop-filter: blur(10px); /* Flou du contenu derrière */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Bordure subtile */
  border-radius: 10px;
  padding: 20px;
}

#creativThing {
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 600;
}

#devThing {
  color: var(--color-secondary);
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
