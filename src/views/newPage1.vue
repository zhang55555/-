<template>
<div>cv我，快点cv我！！
<router-link :to="'/About/'+qid">声明式page1</router-link>
<button @click="function2">命令式page1</button>
<router-link to="/zql">首页</router-link>
<router-link to="/ybh">精彩</router-link>
<router-link to="/nzq">活动</router-link>
<router-link to="/bxw">小瘪三</router-link>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'newPage1',
  components: {},
  props: {},
  data () {
    return {
      qid: 13
    }
  },
  methods: {
    function2 () {
      this.$router.push({
        path: '/about/1234'
      })
    }
  }
}
</script>

<style>

</style>
