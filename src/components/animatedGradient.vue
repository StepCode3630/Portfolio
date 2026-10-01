<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { NeatGradient } from '@firecms/neat'

const canvas = ref(null)
let gradient = null

onMounted(() => {
    gradient = new NeatGradient({
        ref: canvas.value,

        colors: [
            {
                color: '#211A1D',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },

            {
                color: '#6320ee',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },
            {
                color: '#ff5e5b',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },
            {
                color: '#211A1D',
                enabled: true,
            },
        ],

        speed: 0.3,
        horizontalPressure: 4,
        verticalPressure: 4,
        waveFrequencyX: 2,
        waveFrequencyY: 2,
        waveAmplitude: 1,
        secondaryWaveEnabled: false,
        secondaryWaveFrequencyX: 3,
        secondaryWaveFrequencyY: 3,
        secondaryWaveAmplitude: 5,
        secondaryWaveSpeed: 0.6,
        secondaryWaveAngle: 1,
        shadows: 2,
        highlights: 2,
        colorBrightness: 1,
        colorSaturation: -1,
        wireframe: false,
        antialias: false,
        colorBlending: 7,
        backgroundColor: '#ff5e5b',
        backgroundAlpha: 1,
        grainScale: 2,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 1,
        resolution: 0.9,
        yOffset: 0,
        yOffsetWaveMultiplier: 5.8,
        yOffsetColorMultiplier: 3.4,
        yOffsetFlowMultiplier: 10,
        flowDistortionA: 3.7,
        flowDistortionB: 0.8,
        flowScale: 1.6,
        flowEase: 0.32,
        flowEnabled: false,
        enableProceduralTexture: false,
        transparentTextureVoid: false,
        textureMode: 'bitmap',
        bakeEdgeSoftness: 1,
        textureVoidLikelihood: 0.29,
        textureVoidWidthMin: 120,
        textureVoidWidthMax: 420,
        textureBandDensity: 2.9,
        textureColorBlending: 0.06,
        textureSeed: 536,
        textureEase: 0.68,
        proceduralBackgroundColor: '#ff5e5b',
        textureShapeTriangles: 20,
        textureShapeCircles: 15,
        textureShapeBars: 15,
        textureShapeSquiggles: 10,
        domainWarpEnabled: false,
        domainWarpIntensity: 0,
        domainWarpScale: 3,
        vignetteIntensity: 0,
        vignetteRadius: 0.8,
        fresnelEnabled: false,
        fresnelPower: 2,
        fresnelIntensity: 0.5,
        fresnelColor: '#FFFFFF',
        iridescenceEnabled: false,
        iridescenceIntensity: 0.5,
        iridescenceSpeed: 1,
        prismEdgeEnabled: false,
        prismEdgeIntensity: 0.5,
        prismEdgeThinness: 3,
        prismEdgeSpread: 1,
        prismEdgeSpeed: 0.5,
        prismEdgeRipple: 1,
        bloomIntensity: 0,
        bloomThreshold: 0.7,
        chromaticAberration: 0,
        shapeType: 'plane',
        shapeRotationX: 0,
        shapeRotationY: 0,
        shapeRotationZ: 0,
        shapeAutoRotateSpeedX: 0,
        shapeAutoRotateSpeedY: 0,
        sphereRadius: 15,
        torusRadius: 15,
        torusTube: 5,
        cylinderRadius: 10,
        cylinderHeight: 40,
        planeBend: 0,
        planeTwist: 0,
        silhouetteFade: 0.25,
        cylinderFade: 0.08,
        ribbonFade: 0.05,
        flatShading: true,
        cameraLock: true,
        cameraX: 0,
        cameraY: 0,
        cameraZ: 0,
        cameraRotationX: 0,
        cameraRotationY: 0,
        cameraRotationZ: 0,
        cameraZoom: 1,
    })
})

onUnmounted(() => {
    gradient?.destroy()
})
</script>

<template>
    <div class="gradient-container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<style scoped>
.gradient-container {
    position: relative;
    overflow: hidden;
}

canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.content {
    position: relative;
    z-index: 1;
    color: white;
    padding: 4rem;
}
</style>
