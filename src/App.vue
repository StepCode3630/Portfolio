<script setup>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue';
import Contact from './components/Contact.vue';
import InWorkingPage from './components/InWorkingPage.vue';


</script>

<template>

  <div>
    <InWorkingPage />
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
