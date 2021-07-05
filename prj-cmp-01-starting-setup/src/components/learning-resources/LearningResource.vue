<template>
  <base-card>
    <div>
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <p class="mt-2 mb-2 text-sm text-gray-600">{{ description }}</p>
      <a class="text-blue-700 text-sm" :href="link">View Resource</a>
    </div>
    <div>
      <base-button
        class="
          text-white
          bg-red-500
          hover:bg-red-700
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-red-500
          text-xs
        "
        >Delete</base-button
      >
    </div>
  </base-card>
</template>


<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
  props: ['title', 'description', 'link'],
  components: {
    BaseCard,
  },
};
</script>