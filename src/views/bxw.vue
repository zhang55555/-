<template>
<div><span @click="promise1">bxw</span>
<span>{{$store.state.hello}}</span>
<button @click="changeHello">button1</button>
<button @click="changeHello2">button2</button>
<span>{{$store.getters.getHello}}</span>
<button @click="asnyChangeHello()">
    asnyChangeHello
</button>
</div>
</template>

<script>
export default {
  name: 'bxw',
  components: {},
  props: {},
  data () { return {} },
  computed: {},
  methods: {
    promise1 () {
      const q1 = new Promise(resolve => {
        setTimeout(() => {
          resolve('hello')
        }, 1000)
      })
      const q2 = new Promise(resolve => {
        setTimeout(() => {
          resolve('hello11111')
        }, 1000)
      })
      Promise.all([q1, q2]).then((e) => {
        console.log(e)
        // 还有一个race
      })
    },
    asnyChangeHello () {
      this.$store.dispatch('asnyChangeHello', { name: 'zd' })
    },
    changeHello () {
      this.$store.commit('changeHello', { name: 'zs', age: 14 })
    },
    changeHello2 () {
      this.$store.commit({
        type: 'changeHello2',
        dH: { name: 'zs', age: 14 },
        xHM: { name: 'red', age: 15 }
      })
    }
  }
}
</script>

<style>

</style>
