<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

let draggableInstance

onMounted(() => {
    draggableInstance = Draggable.create('.flair--4b', {
        inertia: true,
        bounds: document.getElementById("container")
    })
})

onBeforeUnmount(() => {
    draggableInstance?.forEach((d) => d.kill())
})
</script>

<template>
    <div id="container" class="wrapper">
        <div class="flair flair--4b">Drag me</div>
    </div>
</template>

<style scoped>
.wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    z-index: 10;
    pointer-events: none;
}

.flair--4b {
    width: 120px;
    height: 120px;
    background: gold;
    border-radius: 20px;
    display: grid;
    place-items: center;
    cursor: grab;
    pointer-events: auto;
}
</style>
