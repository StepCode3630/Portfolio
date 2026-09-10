<script setup>
const experiences = [
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
</script>

<template>
    <section class="timeline-section">

        <div class="timeline">
            <article v-for="(item, index) in experiences" :key="index" class="timeline-item">
                <div class="timeline-marker"></div>

                <div class="timeline-card">
                    <span class="timeline-date">{{ item.date }}</span>

                    <h3>{{ item.title }}</h3>

                    <p>{{ item.description }}</p>


                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.timeline-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 20px;
    color: #172033;
}

.timeline-section h2 {
    margin-bottom: 50px;
    text-align: center;
    font-size: 2.4rem;
}

.timeline {
    position: relative;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 18px;
    width: 3px;
    background: var(--color-orange);
}

.timeline-item {
    position: relative;
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
}

.timeline-marker {
    position: relative;
    z-index: 1;
    flex: 0 0 36px;
    height: 36px;
    border: 6px solid var(--color-blue);
    border-radius: 50%;
    background: var(--color-orange);
    box-shadow: 0 0 0 3px var(--color-orange);
}

.timeline-card {
    flex: 1;
    padding: 25px;
    border: 1px solid var(--color-blue);
    border-radius: 16px;
    background: var(--color-bgk);
    box-shadow: 0 10px 25px rgba(30, 41, 59, 0.08);
}

.timeline-date {
    display: inline-block;
    margin-bottom: 10px;
    color: var(--color-yellow);
    font-size: 0.9rem;
    font-weight: bold;
}

.timeline-card h3 {
    margin: 0 0 6px;
    font-size: 1.35rem;
    color: var(--color-yellow);
}



.timeline-card p {
    margin-bottom: 20px;
    color: var(--color-blue);
    line-height: 1.6;
}



/* Responsive mobile */
@media (max-width: 600px) {
    .timeline-section {
        padding: 50px 15px;
    }

    .timeline-section h2 {
        font-size: 2rem;
    }

    .timeline-item {
        gap: 20px;
    }

    .timeline::before {
        left: 13px;
    }

    .timeline-marker {
        flex-basis: 26px;
        width: 26px;
        height: 26px;
        border-width: 4px;
    }

    .timeline-card {
        padding: 18px;
    }
}
</style>
