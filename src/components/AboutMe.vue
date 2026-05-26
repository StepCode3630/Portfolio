<script setup>
import { computed, reactive } from 'vue'

const Description =
  'Passionate about web and application development, I create modern, dynamic, and user-focused experiences by combining clean design with efficient code.'
const skills = [
  {
    name: 'HTML',
    type: 'Frontend',
    icon: 'src/assets/icons/html5-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    type: 'Frontend',
    icon: 'src/assets/icons/css3-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    type: 'Frontend',
    icon: 'src/assets/icons/javascript-seeklogo.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Vue.js',
    type: 'Frontend',
    icon: 'src/assets/icons/vuejs.svg',
    url: 'https://vuejs.org/',
  },

  {
    name: 'Express.js',
    type: 'Backend',
    icon: 'src/assets/icons/express-original.svg',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Adonis.js',
    type: 'Backend',
    icon: 'src/assets/icons/adonisjs-original.svg',
    url: 'https://adonisjs.com/',
  },
  {
    name: 'Node.js',
    type: 'Backend',
    icon: 'src/assets/icons/nodejs-plain.svg',
    url: 'https://nodejs.org/',
  },
  {
    name: 'C#',
    type: 'Mobile',
    icon: 'src/assets/icons/csharp-original.svg',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: 'mongoDB',
    type: 'Database',
    icon: 'src/assets/icons/mongodb-original.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'MySQL',
    type: 'Database',
    icon: 'src/assets/icons/mysql-original.svg',
    url: 'https://www.mysql.com/',
  },
]
const skillTypes = computed(() => {
  return [...new Set(skills.map((skill) => skill.type))]
})

const skillsByType = (type) => {
  return skills.filter((skill) => skill.type === type)
}

const radius = 34
const circumference = 2 * Math.PI * radius

// Etat indépendant pour chaque skill
const loadingStates = reactive({})

skills.forEach((skill) => {
  loadingStates[skill.name] = {
    progress: 0,
    completed: false,
    hovered: false,
    charging: false,
    interval: null,
  }
})

let currentSkill = null

window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'e' && currentSkill) {
    startCharging(currentSkill)
  }
})

window.addEventListener('keyup', (e) => {
  if (e.key.toLowerCase() === 'e' && currentSkill) {
    stopCharging(currentSkill.name)

    unloadProgress(currentSkill.name)
  }
})

function hoverSkill(skill) {
  const state = loadingStates[skill.name]

  state.hovered = true

  currentSkill = skill
}

function leaveSkill(skill) {
  const state = loadingStates[skill.name]

  state.hovered = false

  stopCharging(skill.name)

  unloadProgress(skill.name)

  currentSkill = null
}

function circleStyle(skillName) {
  const progress = loadingStates[skillName].progress

  const offset = circumference - (progress / 100) * circumference

  return {
    strokeDasharray: circumference,
    strokeDashoffset: offset,
  }
}

function resetLoading(skillName) {
  const state = loadingStates[skillName]

  clearInterval(state.interval)

  state.progress = 0
  state.completed = false
}

function startCharging(skill) {
  const state = loadingStates[skill.name]

  if (!state.hovered || state.charging) return

  state.charging = true

  clearInterval(state.interval)

  state.interval = setInterval(() => {
    if (state.progress < 100) {
      state.progress += 1
    }

    if (state.progress >= 100) {
      state.progress = 100
      state.completed = true

      clearInterval(state.interval)

      setTimeout(() => {
        window.open(skill.url, '_blank')
      }, 300)
    }
  }, 20)
}

function stopCharging(skillName) {
  const state = loadingStates[skillName]

  state.charging = false

  clearInterval(state.interval)
}

function unloadProgress(skillName) {
  const state = loadingStates[skillName]

  clearInterval(state.interval)

  state.interval = setInterval(() => {
    // si le joueur recommence à charger
    // on stop le déchargement
    if (state.charging) {
      clearInterval(state.interval)
      return
    }

    if (state.progress > 0) {
      state.progress -= 1.5
    } else {
      state.progress = 0
      state.completed = false

      clearInterval(state.interval)
    }
  }, 10)
}

function shakeStyle(skillName) {
  const progress = loadingStates[skillName].progress

  // intensité progressive
  const intensity = progress / 8

  return {
    '--shake-intensity': `${intensity}px`,
    '--shake-rotate': `${progress / 20}deg`,
    '--shake-speed': `${0.25 - progress / 600}s`,
  }
}
</script>
<template>
  <div class="aboutMe">
    <div class="description">
      <p>{{ Description }}</p>
    </div>
    <div class="skills">
      <h2>My skills</h2>
      <p id="press">Press E</p>

      <div class="typeGrid">
        <div class="skillGrid" v-for="type in skillTypes" :key="type">
          <h3>{{ type }}</h3>

          <ul>
            <li
              v-for="skill in skillsByType(type)"
              :key="skill.name"
              @mouseenter="hoverSkill(skill)"
              @mouseleave="leaveSkill(skill)"
            >
              <img
                class="iconSkills"
                :class="{ shaking: loadingStates[skill.name].progress > 0 }"
                :style="shakeStyle(skill.name)"
                :src="skill.icon"
                :alt="skill.name"
              />
              <transition name="fade">
                <img
                  v-if="loadingStates[skill.name].hovered"
                  id="E"
                  src="/src/assets/icons/E.svg"
                  alt="Press E"
                />
              </transition>

              <svg class="progress-ring" width="80" height="80">
                <circle class="bg" cx="40" cy="40" r="34" />

                <circle class="progress" cx="40" cy="40" r="34" :style="circleStyle(skill.name)" />
              </svg>

              <transition name="boom">
                <div v-if="loadingStates[skill.name].completed" class="success"></div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aboutMe {
  background-color: var(--color-black);
  min-height: 100vh;
  padding: 8rem 2rem;
}
.description {
  color: var(--color-blue);
  font-size: 1.35rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
h2 {
  color: var(--color-yellow);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  margin-bottom: 4rem;
  text-align: center;
}
h3 {
  color: var(--color-yellow);
  font-size: 2.5rem;
  font-weight: bold;
}
.iconSkills {
  width: 58px;
  height: 58px;

  opacity: 0.6;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    filter 0.25s ease;
  z-index: 10;
}

.skills {
  width: 80%;
  margin: 0 auto;
  padding-top: 5vh;
}

.typeGrid {
  display: grid;

  grid-template-columns: repeat(2, minmax(280px, 1fr));

  gap: 2rem;
}

.skillGrid {
  padding: 2rem;
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.shaking {
  animation: shake var(--shake-speed) infinite;
}

.skillGrid:hover {
  transform: translateY(-6px);

  border-color: rgba(59, 130, 246, 0.5);
}

.skillGrid ul {
  list-style: none;

  display: flex;

  flex-wrap: wrap;

  gap: 1.25rem;

  padding: 0;

  margin: 0;
}

.progress-ring {
  position: absolute;
  inset: 0;
}

li {
  position: relative;
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  fill: transparent;
  stroke: #333;
  stroke-width: 6;
}

.progress {
  fill: transparent;
  stroke: var(--color-blue);
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.02s linear;
}

.success {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue);
  font-size: 42px;
  font-weight: bold;
  z-index: 3;
}

.boom-enter-active {
  animation: pop 0.4s ease;
}

@keyframes pop {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  70% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes shake {
  0% {
    transform: translate(0) rotate(359deg);
  }

  20% {
    transform: translate(calc(var(--shake-intensity) * -1), var(--shake-intensity))
      rotate(calc(var(--shake-rotate) * -1));
  }

  40% {
    transform: translate(var(--shake-intensity), calc(var(--shake-intensity) * -1))
      rotate(var(--shake-rotate));
  }

  60% {
    transform: translate(calc(var(--shake-intensity) * -0.5), var(--shake-intensity))
      rotate(calc(var(--shake-rotate) * -0.5));
  }

  80% {
    transform: translate(var(--shake-intensity) * 10) rotate(var(--shake-rotate) * 10);
  }

  100% {
    transform: translate(0) rotate(0deg);
  }
}

#E {
  position: absolute;

  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

@keyframes pulseE {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.12);
  }

  100% {
    transform: scale(1);
  }
}

#press {
  color: white;
}
</style>
