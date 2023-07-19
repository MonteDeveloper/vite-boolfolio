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
    <div class="container h-100 d-flex align-items-center">
        <div class="card my-showCard w-100 text-white bg-dark overflow-hidden">
            <div class="row g-0 h-100">
                <div class="col-md-4">
                    <img :src="project.image ? `http://localhost:8000/storage/${project.image}` : 'http://localhost:8000/storage/placeholders/placeholder.png'" class="img-fluid rounded-start" :alt="project.name">
                </div>
                <div class="col-md-8">
                    <div class="card-body h-100">
                        <div class="d-flex flex-column h-100">
                            <h2 class="card-title text-uppercase h3 text-center my-bgLightDark p-3 rounded">{{project.name}}</h2>
                            <div class="p-3 d-flex flex-column gap-3">
                                <div v-if="project.description">
                                    <h5>Descrizione:</h5>
                                    <p class="card-text">{{project.description}}</p>
                                </div>
                                <hr v-if="project.description && (project.type || project.technologies.length)">
                                <div v-if="project.type">
                                    <p class="card-text"><span class="h5">Type:</span> {{project.type.name}}</p>
                                </div>
                                <div v-if="project.technologies.length">
                                    <p class="card-text"><span class="h5">Technologies:</span> {{ project.technologies.map(technology => technology.name).join(', ') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
