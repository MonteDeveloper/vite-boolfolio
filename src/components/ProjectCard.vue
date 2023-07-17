<script>

export default {
    name: "ProjectCard",
    props: {
        project: Array
    },
    mounted() {
        console.log("Caricato il componente 'ProjectCard'.");
    }
}
</script>

<template>
    <div class="card text-white bg-dark" style="max-width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-uppercase">{{ project.name }}</h5>
            <p class="card-text">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
