<template>
    <main class="build">
        <div class="content">
            <div class="loader"></div>

            <h1>Website in Working</h1>

            <p>
                Wait until the project are finish or contact me on
                <a href="mailto:stepanpatricny@gmail.com">mail
                </a>
            </p>


        </div>
    </main>
</template>

<style scoped>
.build {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 2rem;
    color: white;
    background: linear-gradient(135deg, var(--color-purple), var(--color-black));
    text-align: center;
}

.content {
    max-width: 600px;
}

h1 {
    margin: 1.5rem 0 1rem;
}

p {
    margin-bottom: 2rem;
    color: white;
    font-size: 1.1rem;
    line-height: 1.6;
}

a {
    display: inline-block;
    text-decoration: none;
    color: var(--color-blue)
}

a:hover {
    text-decoration: underline;
}

.loader {
    width: 48px;
    height: 48px;
    margin: auto;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
