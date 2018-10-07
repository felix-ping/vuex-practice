<template>
  <div id="app">
        click:{{count}}times,count is {{  evenOrOdd}} 
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
        <button @click='incrementIfEven'>ifEven</button>
        <button @click="incrementAsync">Increment async</button>
        recentHistory{{recentHistory}}
      </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['evenOrOdd', 'recentHistory','count'])
  },
  methods: {
    ...mapActions(['incrementAsync','increment','decrement','incrementIfEven'])
  }
}
</script>

<style></style>
