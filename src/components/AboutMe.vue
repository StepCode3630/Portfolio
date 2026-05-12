<script setup>
import { computed } from 'vue'

const Description =
  'Passionate about web and application development, I create modern, dynamic, and user-focused experiences by combining clean design with efficient code.'
const skills = [
  {
    name: 'HTML',
    type: 'Frontend',
    icon: 'public/html5-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    type: 'Frontend',
    icon: 'public/css3-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    type: 'Frontend',
    icon: 'public/javascript-seeklogo.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Vue.js',
    type: 'Frontend',
    icon: 'public/vuejs.svg',
    url: 'https://vuejs.org/',
  },

  {
    name: 'Express.js',
    type: 'Backend',
    icon: 'public/express-original.svg',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Adonis.js',
    type: 'Backend',
    icon: 'public/adonisjs-original.svg',
    url: 'https://adonisjs.com/',
  },
  {
    name: 'Node.js',
    type: 'Backend',
    icon: 'public/nodejs-plain.svg',
    url: 'https://nodejs.org/',
  },
  {
    name: 'C#',
    type: 'Mobile',
    icon: 'public/csharp-original.svg',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: 'mongoDB',
    type: 'Database',
    icon: 'public/mongodb-original.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'MySQL',
    type: 'Database',
    icon: 'public/mysql-original.svg',
    url: 'https://www.mysql.com/',
  },
]
const skillTypes = computed(() => {
  return [...new Set(skills.map((skill) => skill.type))]
})

const skillsByType = (type) => {
  return skills.filter((skill) => skill.type === type)
}
</script>
<template>
  <div class="aboutMe">
    <div class="description">
      <p>{{ Description }}</p>
    </div>
    <div class="skills">
      <h2>My skills</h2>

      <div class="typeGrid">
        <div class="skillGrid" v-for="type in skillTypes" :key="type">
          <h3>{{ type }}</h3>

          <ul>
            <li v-for="skill in skillsByType(type)" :key="skill.name">
              <a :href="skill.url" target="_blank" rel="noopener noreferrer">
                <img class="iconSkills" :src="skill.icon" :alt="skill.name" />
              </a>
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
}

.iconSkills:hover {
  transform: scale(1.15) rotate(-3deg);

  opacity: 1;

  filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.35));
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
</style>
