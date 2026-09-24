<script setup>
import { ref } from 'vue'

const header = [
    { text: 'Hero', href: '#home' },
    { text: 'About me', href: '#aboutMe' },
    { text: 'Skills', href: '#skills' },
    { text: 'My projects', href: '#work' },
    { text: 'Contact', href: '#contact' },
]

const isOpen = ref(false)

function openModal() {
    isOpen.value = true
}

function closeModal() {
    isOpen.value = false
}
</script>
<template>
    <div class="mobile-trigger-wrap">
        <button type="button" class="mobile-trigger" @click="openModal" aria-label="Ouvrir le menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <div v-if="isOpen" class="modal-backdrop" @click="closeModal">
        <div class="modal" @click.stop>
            <div class="modal__header">
                <p class="modal__title">Menu</p>
                <button type="button" class="modal__close" @click="closeModal" aria-label="Close menu">
                    ×
                </button>
            </div>

            <nav class="modal__nav" aria-label="Menu mobile">
                <ul class="nav__list">
                    <li v-for="(item, index) in header" :key="index" class="nav__item">
                        <a :href="item.href" class="nav__link" @click="closeModal">{{ item.text }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.mobile-trigger-wrap {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 50;
    display: none;
}

.mobile-trigger {
    width: 64px;
    height: 64px;
    border: 1px solid var(--color-yellow);
    border-radius: 18px;
    background: rgba(255, 217, 0, 0.18);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mobile-trigger:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.16);
}

.mobile-trigger span {
    display: block;
    width: 28px;
    height: 4px;
    border-radius: 999px;
    background: var(--color-purple);
    margin: 4px 0;
}

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 5.5rem 1rem 1rem;
    z-index: 60;
    animation: fadeIn 0.2s ease;
}

.modal {
    width: min(100%, 420px);
    background: rgba(11, 13, 20, 0.92);
    border: 1px solid var(--color-yellow);
    border-radius: 24px;
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.22);
    padding: 1rem;
    animation: slideIn 0.25s ease;
}

.modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.modal__title {
    margin: 0;
    color: var(--color-yellow);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.modal__close {
    border: none;
    background: transparent;
    color: var(--color-yellow);
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
}

.modal__nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav__item {
    margin: 0;
}

.nav__link {
    display: block;
    padding: 0.9rem 1rem;
    border-radius: 999px;
    color: var(--color-yellow);
    text-decoration: none;
    font-weight: 600;
    background: rgba(255, 217, 0, 0.06);
    transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.nav__link:hover {
    background: rgba(255, 217, 0, 0.12);
    color: #fff7d6;
    transform: translateX(4px);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-12px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 768px) {
    .mobile-trigger-wrap {
        display: block;
    }
}
</style>
