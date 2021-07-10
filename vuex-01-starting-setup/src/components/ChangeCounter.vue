<template>
  <div>
    <button @click="inc">Add 2</button>
    <button @click="increase({ value: 11})">Add 11</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    // //   this.$store.commit('increase', {value: 2});
    //     this.$store.dispatch('increment')
    // },
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers',{
        inc: 'increment',
        increase: 'increase'
    })
  },
};
</script>