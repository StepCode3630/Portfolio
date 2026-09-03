<script setup>
import { computed, onMounted, onBeforeUnmount, nextTick, ref } from 'vue'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const splitElement = ref(null)

let splitText;
let tween;

onMounted(async () => {
  await nextTick();



  if (document.fonts?.ready)
    await document.fonts.ready

  const el = splitElement.value
  if (!el) {
    console.warn("Élément .split introuvable")
    return
  }

  gsap.set(el, { opacity: 1 })

  splitText = SplitText.create(el, {
    type: "words,lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,


    onSplit(self) {
      return gsap.from(self.lines, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: true
        }
      })
    }
  })
  ScrollTrigger.refresh()
})

onBeforeUnmount(() => {
  splitElement.value && gsap.killTweensOf(splitElement.value)
  ScrollTrigger.getAll().forEach((trigger) => { if (trigger.trigger === splitElement.value) { trigger.kill() } })
  splitText?.revert()
})

const Description =
  'Passionate about web and application development, I create modern, dynamic, and user-focused experiences by combining clean design with efficient code.'

// https://thesvg.org/
const icon = (name, variant = 'default') =>
  `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${name}/${variant}.svg`



const skills = [
  // Languages
  {
    name: 'JavaScript',
    type: 'Languages',
    icon: icon('javascript'),
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'C#',
    type: 'Languages',
    icon: icon('csharp'),
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },

  // Frameworks
  {
    name: 'Vue.js',
    type: 'Frameworks',
    icon: icon('vuedotjs'),
    url: 'https://vuejs.org/',
  },
  {
    name: 'AdonisJS',
    type: 'Frameworks',
    icon: icon('adonisjs'),
    url: 'https://adonisjs.com/',
  },
  {
    name: 'Express.js',
    type: 'Frameworks',
    icon: icon('expressdotjs'),
    url: 'https://expressjs.com/',
  },
  {
    name: 'Avalonia UI',
    type: 'Frameworks',
    icon: icon('avaloniaui'),
    url: 'https://avaloniaui.net/',
  },


  // Tools
  {
    name: 'Git',
    type: 'Tools',
    icon: icon('git'),
    url: 'https://git-scm.com/',
  },
  {
    name: 'GitHub',
    type: 'Tools',
    icon: icon('github', 'dark'),
    url: 'https://github.com/',
  },
  {
    name: 'GitKraken',
    type: 'Tools',
    icon: icon('gitkraken'),
    url: 'https://www.gitkraken.com/',
  },
  {
    name: 'Docker',
    type: 'Tools',
    icon: icon('docker'),
    url: 'https://www.docker.com/',
  },

  {
    name: 'Figma',
    type: 'Tools',
    icon: icon('figma'),
    url: 'https://www.figma.com/',
  },

  // Databases
  {
    name: 'MySQL',
    type: 'Database',
    icon: icon('mysql', 'wordmark-dark'),
    url: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    type: 'Database',
    icon: icon('mongodb'),
    url: 'https://www.mongodb.com/',
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
  <div id="aboutMe" class="Container">

    <div class="description">

      <p ref="splitElement" class="split">{{ Description }}</p>

    </div>
    <div id="skills" class="skills">
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
.split {
  opacity: 0;
  will-change: transform;
  color: var(--color-blue);
  font-size: 1.35rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
}

.split * {
  will-change: transform;
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

  filter: drop-shadow(0 0 12px var(--color-blue));
}

.skills {
  width: 80%;
  margin: 0 auto;
  padding-top: 15vh;
}

.typeGrid {
  display: grid;

  grid-template-columns: repeat(2, minmax(280px, 1fr));

  gap: 2rem;
}

.skillGrid {
  padding: 2rem;
  border-radius: 24px;

  background: var(--color-bgk);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.skillGrid:hover {
  transform: translateY(-6px);

  border-color: var(--color-blue);
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
