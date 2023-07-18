<script>
import axios from "axios";

import ProjectCard from '../components/ProjectCard.vue'

export default {
    name: "ProjectsList",
    components: {
        ProjectCard
    },
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

            <div v-if="!isLoading" class="d-flex flex-wrap gap-3 p-1 py-4 justify-content-center">
                <ProjectCard v-for="project in projects" :project="project" />

                <div class="d-flex gap-1">
                    <button class="btn btn-dark me-2" :class="{'disabled': currentPage == 1}" @click="getProjectsAtPage( currentPage - 1 )">Pagina precedente</button>
                    <button class="btn btn-dark" :class="{'disabled btn-outline-light': currentPage == pageNumber}" @click="getProjectsAtPage(pageNumber)" v-for="pageNumber in totalPages">{{
                        pageNumber }}</button>
                    <button class="btn btn-dark ms-2" :class="{'disabled': currentPage == totalPages}" @click="getProjectsAtPage( currentPage + 1 )">Pagina successiva</button>
                </div>
            </div>
            <div v-else class="text-white text-center">
                <span class="h2">Loading...</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>
