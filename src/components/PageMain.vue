<script>
import axios from "axios";

export default {
    name: "PageMain",
    props: {
        text: String
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
                <div v-for="project in projects" class="card text-white bg-dark" style="max-width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">{{project.name}}</h5>
                        <p class="card-text">
                            {{project.description}}
                        </p>
                    </div>
                </div>
            </div>
            <div v-else class="text-white text-center">
                <span class="h2">Loading...</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
