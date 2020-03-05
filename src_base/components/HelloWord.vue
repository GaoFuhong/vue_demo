<template>
  <div>
      <p class="hello">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
    .hello {
        color: red;
        font-size: 20px;
    }
</style>
