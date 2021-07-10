<template>
  <div>
    <h3>Final Counter: {{ finalCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers',['finalCounter'])
  },
};
</script>