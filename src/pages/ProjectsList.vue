<script>
import axios from "axios";

export default {
    name: "ProjectsList",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projects: undefined,
            isLoading: false,
            loadingError: undefined,
            currentPage: 1,
            totalPages: undefined
        }
    },
    mounted() {
        this.getProjectsAtFirstPage();

        console.log("Caricato il componente 'ProjectsList'.");
    },
    methods: {
        getProjectsAtFirstPage() {
            this.isLoading = true;
            axios.get(this.apiUrl + "projects").then(response => {
                this.isLoading = false;
                console.log(response.data.results);
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.totalPages = response.data.results.last_page;
            }).catch(err => {
                console.log(err.message);
                this.isLoading = false;
                this.loadingError = err.message;
            });
        },
        getProjectsAtPage(pageNumber) {
            if (pageNumber && pageNumber > 0 && pageNumber <= this.totalPages) {

                let config = {
                    params: {
                        page: pageNumber
                    }
                };

                this.loading = true;
                axios.get(this.apiUrl + "projects", config).then(response => {
                    this.loading = false;
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.totalPages = response.data.results.last_page;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });

            } else {
                console.error("Numero di pagina non trovata");
            }
        }
    }
}
</script>

<template>
    <main class="d-flex justify-content-center align-items-center">
        <div class="container">

            <div v-if="!isLoading" class="d-flex flex-column align-items-center gap-2">
                <!-- <ProjectCard v-for="project in projects" :project="project" /> -->
                <div class="d-flex flex-wrap p-1 justify-content-center w-100">
                    <div v-for="project in projects" class="p-2 col-3">
                        <div class="card bg-dark text-white text-center h-100" style="width: 18rem;">
                            <img :src="project.image ? `http://localhost:8000/storage/${project.image}` : 'http://localhost:8000/storage/placeholders/placeholder.png'" class="card-img-top border-bottom" :alt="project.name">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title text-uppercase py-1 h-100 d-flex align-items-center justify-content-center">{{ project.name }}</h5>
                                <router-link :to="{ name: 'Single-Project', params: { id: project.id } }" class="btn btn-light">View More</router-link>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="d-flex gap-1">
                    <button class="btn btn-dark me-2" :class="{ 'disabled': currentPage == 1 }"
                        @click="getProjectsAtPage(currentPage - 1)">Pagina precedente</button>
                    <button class="btn btn-dark" :class="{ 'disabled btn-outline-light': currentPage == pageNumber }"
                        @click="getProjectsAtPage(pageNumber)" v-for="pageNumber in totalPages">{{
                            pageNumber }}</button>
                    <button class="btn btn-dark ms-2" :class="{ 'disabled': currentPage == totalPages }"
                        @click="getProjectsAtPage(currentPage + 1)">Pagina successiva</button>
                </div>
            </div>
            <div v-else class="text-white text-center">
                <span class="h2">Loading...</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
img {
    aspect-ratio: 1/1;
    object-fit: contain;
}
</style>
