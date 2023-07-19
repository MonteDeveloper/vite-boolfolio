<script>
import axios from "axios";

import ProjectCard from '../components/ProjectCard.vue'

export default {
    name: "SingleProject",
    components: {
        ProjectCard
    },
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            project: undefined,
            isLoading: false,
            loadingError: undefined
        }
    },
    mounted() {
        this.getProjectAtId(this.$route.params.id);

        console.log("Caricato il componente 'SingleProject'.");
    },
    methods: {
        getProjectAtId($id){
            this.isLoading = true;
            axios.get(this.apiUrl + "projects/" + $id).then(response => {
                this.isLoading = false;
                console.log(response.data.results);
                this.project = response.data.results;
            }).catch(err => {
                console.log(err.message);
                this.isLoading = false;
                this.loadingError = err.message;
            });
        }
    }
}
</script>

<template>
    <main class="d-flex justify-content-center align-items-center">
        <ProjectCard v-if="project" :project="project" />
        <div v-else class="text-white text-center">
            <span class="h2">Loading...</span>
        </div>
    </main>
</template>

<style lang="scss" scoped>
img {
    aspect-ratio: 1/1;
    object-fit: contain;
}
</style>
