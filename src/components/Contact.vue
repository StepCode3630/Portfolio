<script setup>

</script>
<template>


    <div class="Container">
        <h2>Contact</h2>
        <p>Please feel free to reach out to me through any of the following platforms:</p>
        <br />
        <div class="contact-links">
            <a href="https://discord.com/users/928364949800108082" target="_blank" rel="noopener noreferrer"><img
                    src="/src/assets/icons/Discord-Symbol-Blurple.svg" alt="Discord" /></a>
            <a href="mailto:example@email.com"><img src="/src/assets/icons/email-svgrepo-com.svg" alt="Email" /></a>
        </div>


    </div>

</template>
<style scoped>
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

p {
    color: var(--color-yellow);
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.contact-links img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
}
</style>
