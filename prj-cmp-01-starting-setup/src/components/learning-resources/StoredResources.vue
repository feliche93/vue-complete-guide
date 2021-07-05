<template>
    <ul class="space-y-3">
      <learning-resource
        v-for="resource in resources" :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link">
      </learning-resource>
    </ul>
</template>

<script>

import LearningResource from './LearningResource.vue';

export default {
    inject: ['resources'],
    components: {
        LearningResource
    },
}
</script>

