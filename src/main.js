import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import _titleAnimation from './directives/titleAnimation.js'

const app = createApp(App)
app.directive('titleAnimation', _titleAnimation)
app.mount('#app')
