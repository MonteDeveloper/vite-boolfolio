<script>
import axios from "axios";

import ProjectCard from './ProjectCard.vue'

export default {
    name: "PageMain",
    components: {
        ProjectCard
    },
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projects: undefined,
            isLoading: false,
            loadingError: undefined
        }
    },
    mounted() {
        this.getProjects();

        console.log("Caricato il componente 'PageMain'.");
    },
    methods: {
        getProjects() {
            this.isLoading = true;
            axios.get(this.apiUrl + "projects").then(response => {
                this.isLoading = false;
                console.log(response.data.results);
                this.projects = response.data.results;
            }).catch(err => {
                this.isLoading = false;
                this.loadingError = err.message;
            });
        }
    }
}
</script>

<template>
    <main class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div v-if="!isLoading" class="d-flex flex-wrap gap-3 p-1 py-4">
                <ProjectCard v-for="project in projects" :project="project" />
            </div>
            <div v-else class="text-white text-center">
                <span class="h2">Loading...</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
