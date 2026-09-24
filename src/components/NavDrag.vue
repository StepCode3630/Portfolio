<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

const navItems = [
    { text: 'Hero', href: '#home' },
    { text: 'About me', href: '#aboutMe' },
    { text: 'Skills', href: '#skills' },
    { text: 'My projects', href: '#work' },
    { text: 'Contact', href: '#contact' },
]

const isMobile = ref(false)
const isOpen = ref(false)
const menuButton = ref(null)
let draggableInstance = null

const updateViewport = () => {
    const mobile = window.innerWidth <= 768
    isMobile.value = mobile

    if (!mobile) {
        isOpen.value = false
        draggableInstance?.forEach((instance) => instance.kill())
        draggableInstance = null
        return
    }

    if (!draggableInstance) {
        draggableInstance = Draggable.create(menuButton.value, {
            inertia: true,
            bounds: document.getElementById('container'),
        })
    }
}

const toggleMenu = () => {
    if (!isMobile.value) return
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}

onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
    draggableInstance?.forEach((instance) => instance.kill())
    window.removeEventListener('resize', updateViewport)
})
</script>

<template>
    <div id="container" class="wrapper" :class="{ 'is-open': isOpen, 'is-mobile': isMobile }">
        <button ref="menuButton" type="button" class="flair flair--4b" aria-label="Ouvrir le menu"
            :aria-expanded="isOpen" @click="toggleMenu">
            <span class="burgerMenu"></span>
            <span class="burgerMenu"></span>
            <span class="burgerMenu"></span>
        </button>

        <nav v-if="isMobile && isOpen" class="mobileNav" aria-label="Navigation mobile">
            <ul class="mobileNav__list">
                <li v-for="(item, index) in navItems" :key="index" class="mobileNav__item">
                    <a :href="item.href" class="mobileNav__link" @click="closeMenu">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 15;
    pointer-events: none;
    display: none;
}

.flair--4b {
    width: max-content;
    min-width: 120px;
    padding: 0.9rem 1.4rem;
    background: rgba(255, 217, 0, 0.18);
    border: 1px solid rgba(255, 217, 0, 0.4);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 100px;
    display: grid;
    place-items: center;
    color: var(--color-purple);
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: grab;
    pointer-events: auto;
    border: none;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease, background-color 0.3s ease;
}

.flair--4b:hover {
    color: var(--color-yellow);
    background-color: rgba(255, 217, 0, 0.18);
    transform: translateY(-2px);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.16);
}

.flair--4b:active {
    cursor: grabbing;
}

.burgerMenu {
    width: 35px;
    height: 5px;
    background-color: var(--color-purple);
    margin: 6px 0;
    border-radius: 999px;
    display: block;
}

.mobileNav {
    position: fixed;
    top: 5.5rem;
    left: 1rem;
    right: 1rem;
    z-index: 20;
    pointer-events: auto;
}

.mobileNav__list {
    list-style: none;
    margin: 0;
    padding: 1rem;
    background: rgba(11, 13, 20, 0.82);
    border: 1px solid rgba(255, 217, 0, 0.4);
    border-radius: 24px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.mobileNav__link {
    display: block;
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 999px;
    color: var(--color-yellow);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.mobileNav__link:hover {
    background-color: rgba(255, 217, 0, 0.12);
    transform: translateX(4px);
}

@media (max-width: 768px) {
    .wrapper {
        display: block;
        pointer-events: auto;
    }

    .flair--4b {
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: 64px;
        min-width: 64px;
        height: 64px;
        padding: 0.75rem;
        border-radius: 18px;
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .burgerMenu {
        width: 28px;
        height: 4px;
        margin: 4px 0;
    }
}
</style>
