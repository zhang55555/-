<template>
  <div class="about">
    <h1>This is an about page{{qid}}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      qid: ''
    }
  },
  beforeDestroy () {
    console.log('要销毁了')
  },
  created () {
    this.qid = this.$route.params.qid
  }
}
</script>
