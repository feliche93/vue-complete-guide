<template>
  <div>
    <h3>Favorite Value: {{ counter }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>