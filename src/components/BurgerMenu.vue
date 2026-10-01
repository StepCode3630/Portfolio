<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { header } from '@/utils/export'
import { gsap } from 'gsap'

const isOpen = ref(false)
const burgerContainer = ref(null)

function toggleMenu() {
    isOpen.value = !isOpen.value

    gsap.to('.mobile-menu', {
        y: isOpen.value ? '-5%' : '20%',
        duration: 0.3,
        ease: 'back.out(2)',
    })
}

function closeMenu() {
    isOpen.value = false

    gsap.to('.mobile-menu', {
        y: isOpen.value ? '-20%' : '-5%',
        duration: 0.3,
        ease: 'back.out(1)',
    })
}

function handleClickOutside(event) {
    if (!burgerContainer.value) return

    // si le clic est dans le conteneur du burger, on ne ferme pas
    if (burgerContainer.value.contains(event.target)) {
        return
    }

    closeMenu()
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div ref="burgerContainer" class="burger-container">
        <button class="burger" :class="{ 'burger--open': isOpen }" type="button" :aria-expanded="isOpen"
            aria-controls="mobile-menu" aria-label="Ouvrir ou fermer le menu" @click.stop="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav id="mobile-menu" class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }">
            <ul>
                <li v-for="(item, index) in header" :key="index">
                    <a :href="item.href" @click="closeMenu">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.burger-container {
    display: none;
}

/* Affichage uniquement sur mobile */
@media (max-width: 768px) {
    .burger-container {
        position: fixed;
        right: 80%;
        bottom: 1.5rem;
        z-index: 30;
        display: block;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 65px;
        height: 65px;
        padding: 0;
        border: 1px solid rgba(255, 217, 0, 0.4);
        border-radius: 50%;
        background: rgba(255, 217, 0, 0.18);
        backdrop-filter: blur(16px);
        cursor: pointer;
    }

    .burger span {
        width: 24px;
        height: 3px;
        border-radius: 5px;
        background-color: white;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .burger--open span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .burger--open span:nth-child(2) {
        opacity: 0;
    }

    .burger--open span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .mobile-menu {
        position: absolute;
        bottom: 4.5rem;
        display: none;
    }

    .mobile-menu--open {
        display: block;
    }

    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;
        min-width: 190px;
        margin: 0;
        padding: 0.8rem;
        list-style: none;
        border: 1px solid rgba(255, 217, 0, 0.4);
        border-radius: 20px;
        background: rgba(255, 217, 0, 0.18);
        backdrop-filter: blur(16px);
        transition: 0.2s ease-in all;
    }

    .mobile-menu a {
        display: block;
        padding: 0.8rem 1rem;
        color: white;
        text-decoration: none;
        border-radius: 100px;
    }

    .mobile-menu a:hover {
        color: var(--color-yellow);
        background-color: rgba(255, 217, 0, 0.18);
    }
}
</style>
