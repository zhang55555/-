<template>
<div><span>杨同学</span>{{skyB}}
    <button @click="childToFather">子传父，自定义事件</button>
    <button @click="visited">visited father</button>
    <slot :sea="info2"></slot>
</div>
</template>

<script>
export default {
  name: 'yangSon',
  components: {},
  props: {
    skyB: String
  },
  data () {
    return {
      info1: { name: 'zs' },
      info2: 'qwqwqwwwqw'
    }
  },
  computed: {},
  watch: {},
  methods: {
    childToFather () {
      this.$emit('dong', 1)
    },
    visited () {
      const log = this.$parent.inputValue
      console.log(log)
    }
  }
}
</script>

<style>

</style>
