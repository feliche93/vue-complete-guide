<template>
  <div>
    <the-header title="Vue Learning Resource"></the-header>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <the-resources></the-resources>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResource.vue'

export default {
  components: {
    TheHeader,
    TheResources
  },
};
</script>