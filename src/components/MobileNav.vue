<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'

const header = [
    { text: 'Hero', href: '#home' },
    { text: 'About me', href: '#aboutMe' },
    { text: 'Skills', href: '#skills' },
    { text: 'My projects', href: '#work' },
    { text: 'Contact', href: '#contact' },
]

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },

    width: {
        type: [String, Number],
        default: 300
    },

    right: {
        type: Boolean,
        default: false
    },

    closeOnOverlay: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['update:modelValue'])

let bodyOldStyle = ''
let appOldStyle = ''

const menuWidth = computed(() => {
    const value = String(props.width)

    return value.includes('px') ||
        value.includes('%') ||
        value.includes('rem') ||
        value.includes('vw')
        ? value
        : `${value}px`
})

function openMenu() {
    emit('update:modelValue', true)
}

function closeMenu() {
    emit('update:modelValue', false)
}

function toggleMenu() {
    emit('update:modelValue', !props.modelValue)
}

function pushPage() {
    const pageWrap = document.querySelector('#page-wrap')

    if (!pageWrap) return

    const distance = props.right
        ? `-${menuWidth.value}`
        : menuWidth.value

    const angle = props.right ? '-3deg' : '3deg'
    bodyOldStyle = document.body.getAttribute('style') || ''
    document.body.style.overflowX = 'hidden'

    pageWrap.style.transform = `translate3d(${distance}, 0, 0) rotateY(${angle})`
    pageWrap.style.transformOrigin = props.right ? 'left center' : 'right center'
    pageWrap.style.transformStyle = 'preserve-3d'
    pageWrap.style.transition = 'all 0.5s ease 0s'

    const appEl = document.querySelector('#app')
    appOldStyle = appEl ? appEl.getAttribute('style') || '' : ''
    if (appEl) {
        appEl.style.perspective = '1500px'
        appEl.style.overflow = 'hidden'
    }
}

function pullPage() {
    const pageWrap = document.querySelector('#page-wrap')

    if (!pageWrap) return

    pageWrap.style.transition = 'all 0.5s ease 0s'
    pageWrap.style.transform = 'translate3d(0, 0, 0) rotateY(0deg)'
    pageWrap.style.transformStyle = ''
    pageWrap.style.transformOrigin = ''

    const appEl = document.querySelector('#app')
    if (appEl) appEl.setAttribute('style', appOldStyle)
    document.body.setAttribute('style', bodyOldStyle)
}

function handleEscape(event) {
    if (event.key === 'Escape' && props.modelValue) {
        closeMenu()
    }
}

watch(
    () => props.modelValue,
    (isOpen) => {
        if (isOpen) {
            pushPage()
        } else {
            pullPage()
        }
    },
    { immediate: true }
)

watch(
    () => [props.width, props.right],
    () => {
        if (props.modelValue) {
            pushPage()
        }
    }
)

onMounted(() => {
    document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscape)
    pullPage()
})
</script>

<template>
    <aside class="mobile-nav" :class="{
        'mobile-nav--open': modelValue,
        'mobile-nav--right': right
    }" :style="{ width: menuWidth }" aria-label="Navigation principale">
        <button class="mobile-nav__close" type="button" aria-label="Fermer le menu" @click="closeMenu">
            ×
        </button>

        <nav class="mobile-nav__links">
            <ul class="nav__list">
                <li v-for="(item, index) in header" :key="index" class="nav__item">
                    <a :href="item.href" class="nav__link">{{ item.text }}</a>
                </li>
            </ul>
        </nav>
    </aside>

    <Transition name="mobile-nav-overlay">
        <button v-if="modelValue" class="mobile-nav__overlay" type="button" aria-label="Fermer le menu"
            @click="closeOnOverlay && closeMenu()" />
    </Transition>

    <button class="mobile-nav__toggle" type="button" :aria-expanded="modelValue" aria-controls="mobile-navigation"
        aria-label="Ouvrir le menu" @click="toggleMenu">
        <span />
        <span />
        <span />
    </button>
</template>

<style scoped>
.mobile-nav {
    position: fixed;
    z-index: 1001;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: white;
    background: #111;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

.mobile-nav--right {
    right: 0;
    left: auto;
    transform: translateX(100%);
}

.mobile-nav--open {
    transform: translateX(0);
}

.mobile-nav__close {
    align-self: flex-end;
    border: 0;
    color: white;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
}

.mobile-nav__links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
}

.mobile-nav__links a {
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
}

.mobile-nav__overlay {
    position: fixed;
    z-index: 1000;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: rgb(0 0 0 / 45%);
    cursor: pointer;
}

.mobile-nav__toggle {
    position: fixed;
    z-index: 1002;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0.75rem;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.mobile-nav__toggle span {
    display: block;
    width: 28px;
    height: 3px;
    background: currentColor;
}

.mobile-nav-overlay-enter-active,
.mobile-nav-overlay-leave-active {
    transition: opacity 0.3s ease;
}

.mobile-nav-overlay-enter-from,
.mobile-nav-overlay-leave-to {
    opacity: 0;
}
</style>
