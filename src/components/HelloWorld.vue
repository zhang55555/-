<template>
  <div class="hello" ref="hello">
    <span>{{inputValue}}</span>
    <input type="text" :value="inputValue" @keyup="clickMe">
    <input type="radio"  :value="dog" v-model="animal" name="12">
     <input type="radio" :value="cat"  v-model="animal" name="12">
     <button>{{animal}}</button>
     <span>{{sport}}</span>
     <input type="checkbox" name="13" value="足球" v-model="sport">
    <input type="checkbox" name="13" value="篮球" v-model="sport">
    {{interest}}
    <select name="15" v-model="interest">
<option value="q1">qqq1</option>
<option value="q2">qqq2</option>
<option value="q3">qqq3</option>
    </select>
    <input type="text" v-model.lazy="inputValue2">
    {{inputValue2}}
    <button @click="test1">refs</button>
    <yang-son :sky-b="'qqqqwer'" ref="child2" @dong="dong1">
      <span slot-scope="scope">{{scope}}</span>
    </yang-son>
    <button @click="changeTheHash">hashChange</button>
    <div v-show="hashFlag">11111</div>
    <router-link  :to='router1'>换个页面</router-link>
    <a href="#" @click.prevent="function1">命令式导航</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: 'qwqw',
      flag: true,
      dog: '中华田园犬',
      cat: '秋田猫',
      animal: '',
      sport: [],
      interest: [],
      inputValue2: '',
      hashFlag: false,
      router1: '/newPage1'
    }
  },
  methods: {
    clickMe (e) {
      this.inputValue = e.target.value
    },
    changeTheHash () {
      window.location.hash = '#ml'
    },
    function1 () {
      this.$router.push('/newPage1')
    },
    hashChange () {
      this.hashFlag = !this.hashFlag
    },
    dong1 (a) {
      console.log('123' + a)
    },
    test1 () {
      const child2 = this.$refs.child2
      console.log(child2.info1.name)
    }
  },
  components: {
    yangSon: () => import('@/views/yangSon.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
