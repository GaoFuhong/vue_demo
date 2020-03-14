<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="handleSearch">Search</button>
      </div>
    </section>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    handleSearch () {
      const searchName = this.searchName.trim()
      if (searchName) {
        // 发布搜索的消息
        Pubsub.publish('handleSearch', searchName)
      }
    }
  }
}
</script>

<style>

</style>
