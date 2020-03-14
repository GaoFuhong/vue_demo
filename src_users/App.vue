<template>
  <div class="container">
    <Search />
    <MainUser />
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'
export default {
  components: {
    Search,
    MainUser: Main
  }
}
</script>

<style>
</style>
