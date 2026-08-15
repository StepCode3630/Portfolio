<script setup>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue';
</script>

<template>
  <header>
    <nav>
      <Nav />
    </nav>
  </header>
  <div class="spacer">
    <Home />
  </div>
  <div>
    <AboutMe />
    <MyProjects />
  </div>
  <main></main>
</template>

<style scoped>
.spacer {
  background-image: url('/src/assets/fond-montagne.jpg');
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  height: 100vh;
}
</style>
