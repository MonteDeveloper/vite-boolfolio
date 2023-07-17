<script>

export default {
    name: "PageFooter",
    data() {
        return {
        }
    },
    mounted() {
        console.log("Caricato il componente 'PageFooter'.");
    }
}
</script>

<template>
    <footer class="text-light d-flex align-items-center justify-content-center py-3">
        <p class="m-0">made by Lorenzo Montello</p>
    </footer>
</template>

<style lang="scss" scoped>
footer{
    background-color: #221f22;
}
</style>
