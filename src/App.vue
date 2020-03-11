<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>the most star repository is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
// axios在哪个组件使用就在哪个组件引入
import axios from 'axios'
export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 使用vue-resource发送ajax请求获取数据
    const url = `https://api.github.com/search/repositories?q=vu&sort=star`
    // this.$http.get(url).then(
    //   response => {
    //     const result = response.data
    //     const mostStarRepo = result.items[0]
    //     this.repoUrl = mostStarRepo.html_url
    //     this.repoName = mostStarRepo.name
    //   },
    //   response => {
    //     alert('获取失败！')
    //   })

    // 使用axios发送ajax请求获取数据
    axios.get(url).then(
      response => {
        const result = response.data
        const mostStarRepo = result.items[0]
        this.repoUrl = mostStarRepo.html_url
        this.repoName = mostStarRepo.name
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
      alert('获取失败！')
    })
  }
}
</script>

<style>

</style>
