<script>

export default {
    name: "PageHeader",
    props: {
        text: String
    },
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
        <h1>BOOLFOLIO</h1>
    </header>
</template>

<style lang="scss" scoped>
header{
    background-color: #221f22;
}
</style>
