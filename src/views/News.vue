<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArray" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsArray: ['news001', 'news002', 'news003', 'news004']
    }
  }
}
</script>

<style>

</style>
