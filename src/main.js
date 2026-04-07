import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp({
  data() {
    return {
      text: `Hi, I'm Patricny Stepan. I am a junior developer, I combine creativity and code to create
        something cool in a simple and effective way. I am specialized in web development in
        particular in
        <a href="https://adonisjs.com/" target="_blank" rel="noopener noreferrer">AdonisJs</a> et
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJs</a>, but I am
        also interested in game development and mobile applications.`,
    }
  },
  methods: {},
})

app.mount('#app')
