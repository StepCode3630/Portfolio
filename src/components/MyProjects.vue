<script setup>
import { ref, onMounted, computed } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const username = 'StepCode3630'
const pinnedRepos = ref([])
async function parseResponse(response) {
    if (response.status === 204) return null

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
        throw new Error(data?.message || `HTTP ${response.status}`)
    }

    return data
}

async function getPinnedRepo() {
    try {
        const response = await fetch(`https://api.kremilly.com/github?user=${username}`);
        console.log(response);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await parseResponse(response);
        console.log(result);

        return Array.isArray(result) ? result : (result.data ?? [])
    }
    catch (error) {
        console.error('Error fetching pinned repositories:', error)
        return []
    }
}

async function loadProjects() {
    try {
        const repos = await getPinnedRepo()
        pinnedRepos.value = repos
        console.log('Pinned repositories loaded:', repos)
    } catch (error) {
        console.error('Error loading projects:', error)
    }
    pinnedRepos.value = await getPinnedRepo()
}

onMounted(loadProjects)




const carouselConfig = {
    itemsToShow: 3.5,
    gap: 50,
    autoplay: 2067,
    wrapAround: true,
    pauseAutoplayOnHover: true,
}


</script>
<template>

    <div v-if="!pinnedRepos.length">
        <p>Loading projects...</p>
    </div>
    <div v-else class="projectsContainer">
        <h2>My projects</h2>
        <Carousel v-bind="carouselConfig">
            <Slide class="slide" v-for="p in pinnedRepos" :key="p.id">
                <div class="card">
                    <h3>{{ p.name }}</h3>
                    <p class="projectDesc">{{ p.description || 'No description available.' }}</p>
                    <a class="projectLink" :href="p.url" target="_blank" rel="noopener">View project</a>
                    <div class="cardLanguages">
                        <div v-for="language in p.languages" :key="language" class="cardFooter">
                            <span class="meta">
                                {{ language }}
                            </span>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />

            </template>
        </Carousel>


    </div>

</template>
<style scoped>
:root {
    --carousel-transition: 3000ms;
    --carousel-opacity-inactive: 0.2;
    --carousel-opacity-active: 1;
    --carousel-opacity-near: 0.9;

    background-color: #242424;
}

.projectsContainer {
    background-color: var(--color-black);
    min-height: 100vh;
    padding: 8rem 2rem;
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

.slide {
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding: 0.75rem;
    cursor: grab;
}

.slide:active {
    cursor: grabbing;
}

.card {
    background: var(--color-bgk);
    border: 1px solid var(--color-border);
    border-radius: 14px;
    padding: 1rem;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 10px 30px rgba(16, 16, 16, 0.08);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 22px 50px rgba(16, 16, 16, 0.12);
    border-color: var(--color-border-hover);
}

.projectDesc {
    color: var(--color-text);
    font-size: 0.95rem;
    line-height: 1.45;
    margin: 0;
    min-height: 48px;
}

.projectLink {
    display: inline-block;
    align-self: flex-start;
    color: var(--color-black);
    background: var(--color-yellow);
    padding: 0.35rem 0.6rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
}

.cardLanguages {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
    flex-direction: row;
}

.cardFooter {
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
    display: flex;
    flex-direction: row;
}

.meta {
    background: rgba(255, 255, 255, 0.03);
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-size: 0.85rem;
    color: var(--color-text);

}

.meta img {
    width: 24px;
    height: 24px;
    margin-right: 0.25rem;
    vertical-align: middle;
}

@media (max-width: 640px) {
    .card {
        max-width: 320px;
        padding: 0.9rem;
    }
}

.carousel__slide {
    opacity: var(--carousel-opacity-inactive);
    transform: scale(0.9);
}

.carousel__slide--prev {
    opacity: var(--carousel-opacity-near);
    transform: scale(0.95);
}

.carousel__slide--active {
    opacity: var(--carousel-opacity-active);
    transform: scale(1);
}

.carousel__slide--next {
    opacity: var(--carousel-opacity-near);
    transform: scale(0.95);
}

.carousel__slide--next~.carousel__slide {
    opacity: var(--carousel-opacity-inactive);
    transform: scale(0.9);
}

.carousel {
    --vc-nav-background: var(--color-orange);
    --vc-nav-color: white;
    --vc-nav-color-hover: var(--color-blue);
    --vc-nav-border-radius: 50%;
    --vc-nav-width: 40px;
    --vc-nav-height: 40px;
    transition: 0.2 ease all;
}
</style>
