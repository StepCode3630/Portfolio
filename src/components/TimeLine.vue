<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timelineElement = ref(null)
const milestoneElements = ref([])

const milestones = [
    {
        date: "2024",
        title: "Starting ETML",
        description: "I started my studies at ETML in the IT field."
    }
    , {
        date: "2026",
        title: "Still in ETML",
        description: "I am currently in my 3rd year of IT studies at ETML."
    }
]

let animationContext

onMounted(async () => {
    await nextTick()

    animationContext = gsap.context(() => {
        const dots = milestoneElements.value.map((milestone) =>
            milestone.querySelector(".dot")
        )

        const cards = milestoneElements.value.map((milestone) =>
            milestone.querySelector(".milestone-card")
        )

        const line = timelineElement.value.querySelector(".line")

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: timelineElement.value,
                start: "top 75%",
                end: "bottom 75%",
                scrub: 1,
                invalidateOnRefresh: true
            }
        })

        tl.fromTo(
            line,
            {
                scaleY: 0,
                transformOrigin: "top center"
            },
            {
                scaleY: 1,
                duration: 1.2,
                ease: "none"
            }
        )

        dots.forEach((dot, index) => {
            tl.from(
                dot,
                {
                    scale: 0,
                    opacity: 0,
                    ease: "back.out(2)",
                    duration: 0.35
                },
                0.3 + index * 0.35
            )

            tl.from(
                cards[index],
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                    rotateY: index % 2 === 0 ? -10 : 10,
                    ease: "power3.out",
                    duration: 0.55
                },
                0.4 + index * 0.35
            )
        })

        gsap.to(dots, {
            scale: 1.12,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            stagger: 0.25,
            ease: "sine.inOut"
        })
    }, timelineElement.value)
})

onUnmounted(() => {
    animationContext?.revert()
})
</script>

<template>
    <section ref="timelineElement" class="timeline-section">

        <div class="timeline">
            <div class="line"></div>

            <article v-for="(milestone, index) in milestones" :key="milestone.title" ref="milestoneElements"
                class="milestone">
                <div class="dot"></div>

                <div class="milestone-card">
                    <span>{{ milestone.date }}</span>
                    <h3>{{ milestone.title }}</h3>
                    <p>{{ milestone.description }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.timeline-section {
    padding: 120px 20px;
    overflow: hidden;
}



.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 0;
}

.line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    border-radius: 10px;
    background: linear-gradient(to bottom,
            var(--color-blue),
            var(--color-purple),
            var(--color-orange));
    transform: translateX(-50%);
}

.milestone {
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 50%;
    min-height: 180px;
    margin-bottom: 70px;
    perspective: 1000px;
}

.milestone:nth-child(even) {
    margin-left: 50%;
    justify-content: flex-end;
}

.dot {
    position: absolute;
    top: 30px;
    right: -12px;
    z-index: 2;
    width: 24px;
    height: 24px;
    border: 4px solid var(--color-purple);
    border-radius: 50%;
    background: var(--color-blue);
    box-shadow: 0 0 0 3px var(--color-blue);
}

.milestone:nth-child(even) .dot {
    right: auto;
    left: -12px;
}

.milestone-card {
    width: calc(100% - 45px);
    padding: 25px;
    border: 1px solid var(--color-blue);
    border-radius: 18px;
    background: var(--color-bgk);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
    transform-style: preserve-3d;
}

.milestone:not(:nth-child(even)) .milestone-card {
    margin-right: 45px;
}

.milestone:nth-child(even) .milestone-card {
    margin-left: 45px;
}

.milestone-card span {
    color: var(--color-blue);
    font-size: 0.85rem;
    font-weight: 700;
}

.milestone-card h3 {
    margin: 10px 0;
    color: var(--color-yellow);
}

.milestone-card p {
    margin: 0;
    color: var(--color-blue);
    line-height: 1.6;
}

/* Mobile */
@media (max-width: 700px) {
    .timeline {
        padding-left: 20px;
    }

    .line {
        left: 20px;
    }

    .milestone,
    .milestone:nth-child(even) {
        width: 100%;
        margin-left: 0;
        justify-content: flex-start;
    }

    .dot,
    .milestone:nth-child(even) .dot {
        top: 30px;
        right: auto;
        left: 8px;
    }

    .milestone-card,
    .milestone:nth-child(even) .milestone-card,
    .milestone:not(:nth-child(even)) .milestone-card {
        width: calc(100% - 50px);
        margin-right: 0;
        margin-left: 50px;
    }
}
</style>
