<script>

export default {
    name: "PageHeader",
    data() {
        return {
        }
    },
    mounted() {
        console.log("Caricato il componente 'PageHeader'.");
    }
}
</script>

<template>
    <header class="text-light py-3 d-flex align-items-center justify-content-center">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BOOLFOLIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="link in $router.getRoutes()" :key="link.to">
                            <router-link :to="link.path" class="nav-link" :class="{ active: $route.path === link.path }">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #221f22;
}
</style>
