<script setup>
const experiences = [
  {
    title: 'Développement web',
    meta: 'Vue · AdonisJS · API REST',
    bullets: ['Interfaces rapides et accessibles', 'Back-end propre (auth, validation, DB)', 'Déploiement & CI'],
  },
  {
    title: 'Créativité & produit',
    meta: 'UI/UX · Design system',
    bullets: ['Composants réutilisables', 'Micro-interactions discrètes', 'Pages orientées conversion'],
  },
]

const projects = [
  {
    name: 'Projet 1',
    desc: 'Une courte description de ton projet (stack, objectif, résultat).',
    tags: ['Vue', 'API', 'UI'],
    href: '#',
  },
  {
    name: 'Projet 2',
    desc: 'Une courte description de ton projet (fonctionnalités clés, impact).',
    tags: ['AdonisJS', 'DB', 'Auth'],
    href: '#',
  },
  {
    name: 'Projet 3',
    desc: 'Une courte description de ton projet (problème résolu, ce que tu as appris).',
    tags: ['TypeScript', 'Tests', 'DX'],
    href: '#',
  },
]
</script>

<template>
  <div class="page">
    <section id="home" class="section">
      <div class="hero card">
        <div class="hero__left">
          <p class="kicker">Portfolio</p>
          <h1 class="title">
            <span class="title__accent">Créatif</span>
            <span class="title__sep">·</span>
            <span>Développeur</span>
          </h1>
          <p class="subtitle">
            Salut, je suis Patricny Stepan. Je combine design et code pour construire des expériences
            web simples, efficaces et agréables.
          </p>

          <div class="cta">
            <a class="btn btn--primary" href="#projects">Voir mes projets</a>
            <a class="btn" href="#contact">Me contacter</a>
          </div>
        </div>

        <div class="hero__right">
          <div class="stats grid grid--2">
            <div class="stat card">
              <p class="stat__value">Front</p>
              <p class="stat__label">Vue, composants, performance</p>
            </div>
            <div class="stat card">
              <p class="stat__value">Back</p>
              <p class="stat__label">AdonisJS, API, base de données</p>
            </div>
          </div>
          <div class="stack card">
            <p class="stack__title">Stack</p>
            <div class="stack__chips">
              <span class="chip">Vue</span>
              <span class="chip">AdonisJS</span>
              <span class="chip">TypeScript</span>
              <span class="chip">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <h2 class="section__title">Expérience</h2>
      <div class="grid grid--2">
        <article v-for="xp in experiences" :key="xp.title" class="card">
          <h3 class="card__title">{{ xp.title }}</h3>
          <p class="card__meta">{{ xp.meta }}</p>
          <ul class="list">
            <li v-for="b in xp.bullets" :key="b">{{ b }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="projects" class="section">
      <h2 class="section__title">Projets</h2>
      <div class="grid grid--3">
        <article v-for="p in projects" :key="p.name" class="card project">
          <div class="project__top">
            <h3 class="card__title">{{ p.name }}</h3>
            <a v-if="p.href && p.href !== '#'" class="project__link" :href="p.href" target="_blank" rel="noopener">
              Ouvrir
            </a>
          </div>
          <p class="project__desc">{{ p.desc }}</p>
          <div class="project__tags">
            <span v-for="t in p.tags" :key="t" class="chip chip--soft">{{ t }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section">
      <h2 class="section__title">Contact</h2>
      <div class="grid grid--2">
        <div class="card">
          <p class="contact__lead">
            Un projet, une mission, ou juste envie d’échanger ? Écris‑moi et je te réponds rapidement.
          </p>
          <div class="cta">
            <a class="btn btn--primary" href="mailto:hello@example.com">hello@example.com</a>
            <a class="btn" href="#home">Retour en haut</a>
          </div>
        </div>

        <footer class="card footer">
          <p class="footer__title">Liens</p>
          <div class="footer__links">
            <a href="#" target="_blank" rel="noopener">GitHub</a>
            <a href="#" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener">CV</a>
          </div>
          <p class="footer__fineprint">© {{ new Date().getFullYear() }} · Patricny Stepan</p>
        </footer>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
}

.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 22px;
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  opacity: 0.85;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.title {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  font-size: 2.1rem;
  line-height: 1.1;
  color: var(--color-heading);
  margin: 0 0 10px;
}

.title__accent {
  color: var(--color-primary);
  font-weight: 800;
}

.title__sep {
  opacity: 0.4;
}

.subtitle {
  opacity: 0.92;
  max-width: 60ch;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.btn {
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn--primary {
  background: rgba(204, 168, 83, 0.22);
  border-color: rgba(204, 168, 83, 0.38);
}

.stats {
  gap: 12px;
}

.stat {
  padding: 14px;
}

.stat__value {
  font-weight: 900;
  color: var(--color-heading);
  margin-bottom: 4px;
}

.stat__label {
  opacity: 0.86;
  font-size: 0.98rem;
}

.stack {
  padding: 14px;
}

.stack__title {
  font-weight: 900;
  color: var(--color-heading);
  margin-bottom: 10px;
}

.stack__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.08);
  font-weight: 900;
  font-size: 0.9rem;
}

.chip--soft {
  background: rgba(255, 255, 255, 0.06);
  opacity: 0.92;
}

.card__title {
  margin: 0 0 6px;
  color: var(--color-heading);
  font-size: 1.15rem;
  font-weight: 900;
}

.card__meta {
  opacity: 0.85;
  margin-bottom: 10px;
}

.list {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}

.project__top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.project__link {
  font-weight: 900;
  font-size: 0.95rem;
}

.project__desc {
  opacity: 0.92;
  margin: 10px 0 12px;
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.contact__lead {
  max-width: 60ch;
}

.footer__title {
  font-weight: 900;
  color: var(--color-heading);
  margin-bottom: 10px;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 12px;
}

.footer__fineprint {
  opacity: 0.8;
  font-size: 0.95rem;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
  }
}
</style>
