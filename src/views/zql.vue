<template>
<div><span>zql</span>
<span>{{$store.state.a.howAreYou}}</span>
</div>
</template>

<script>
export default {
  name: 'zql',
  components: {},
  props: {},
  data () { return {} },
  computed: {},
  watch: {},
  methods: {},
  created () {
    this.$axios.all([this.$axios({
      url: './test1.json'
    }), this.$axios({
      url: './test1.json'
    })])
  }
  // 并发感觉很鸡肋
}
</script>

<style>

</style>
