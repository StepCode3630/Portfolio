<script setup>
import { ref, onMounted, computed } from 'vue'


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



</script>
<template>

    <div class="projectsContainer">
        <h2>My projects</h2>

        <div class="projectsGrid">
            <div class="projectCard" v-for="p in pinnedRepos" :key="p.id">
                <div class="cardHeader">
                    <h3>{{ p.name }}</h3>
                    <a class="projectLink" :href="p.url" target="_blank" rel="noopener">View project</a>
                </div>

                <p class="projectDesc">{{ p.description || 'No description available.' }}</p>

                <div v-for="language in p.languages" :key="language" class="cardFooter">
                    <span class="meta">{{ language }}</span>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
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
    box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
    padding: 25px;
    border-radius: 5px;
}
</style>
