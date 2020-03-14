<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
        {id: 1, title: 'message01', content: 'message01 content 01...'},
        {id: 3, title: 'message03', content: 'message03 content 03...'},
        {id: 4, title: 'message04', content: 'message04 content 04...'}
      ]
      this.allMessageDetails = allMessageDetails
      this.messageDetail = allMessageDetails.find(detail => detail.id === this.$route.params.id * 1)
    }, 1000)
  },
  watch: {
    $route: function (value) {
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === value.params.id * 1)
    }
  }
}
</script>

<style>

</style>
