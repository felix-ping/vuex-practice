<template>
  <div id="app">
        click:{{count}}times,count is {{  evenOrOdd}}
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
        <button @click='incrementIfEven'>ifEven</button>
        <button @click="incrementAsync">Increment async</button>
      </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    ...mapMutations(['increment','decrement','incrementIfEven']),
    ...mapActions(['incrementAsync'])
  }
}
</script>

<style></style>
