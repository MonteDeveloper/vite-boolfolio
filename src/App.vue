<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<template>
  <PageHeader />
  <router-view></router-view>
  <PageFooter />
</template>

<style lang="scss" scoped>
</style>
