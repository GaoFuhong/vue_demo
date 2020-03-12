<template>
  <div>
    <h2 v-if="firstView">Please input user's name to search!</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key=index>
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      firstView: true,
      loading: false,
      errorMsg: '',
      users: null // [{url: '', avatar_url: '', name: ''}]
    }
  },
  mounted () {
    Pubsub.subscribe('handleSearch', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`
      // 更新状态（请求中）
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      axios.get(url).then(response => {
        this.loading = false
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        this.loading = false
        this.users = users
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.errorMsg = 'Request failed!'
      })
    })
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
