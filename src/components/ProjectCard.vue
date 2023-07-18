<script>

export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    mounted() {
        console.log("Caricato il componente 'ProjectCard'.");
    }
}
</script>

<template>
    <div class="card text-white bg-dark" style="max-width: 18rem;">
        <div class="card-body">
            <img :src="project.image ? `http://localhost:8000/storage/${project.image}` : 'http://localhost:8000/storage/placeholders/placeholder.png'" class="card-img-top" :alt="project.name">
            <h5 class="card-title text-uppercase">{{ project.name }}</h5>
            <p class="card-text">
                {{ project.description }}
            </p>
            <div>

                <hr v-if="project.type || project.technologies.length">
                <p v-if="project.type">Type: {{ project.type.name }}</p>
                <p v-if="project.technologies.length">
                    Technologies:
                    <span>{{ project.technologies.map(technology => technology.name).join(', ') }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
