<script setup>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue';
import Contact from './components/Contact.vue';


</script>

<template>
  <header>
    <nav>
      <Nav />
    </nav>
  </header>
  <div id="home" class="spacer">
    <Home />
  </div>
  <div>
    <AboutMe />
    <MyProjects />
    <Contact />
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
