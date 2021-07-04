<template>
    <ul>
        <learning-resource
        v-for="resource in storedResources" :key="resource.id"
        >
          Title: {{ resource.title }}
            Description: {{ resource.description }}
            Link: <a :href="resource.link">{{ resource.link }}</a>
        </learning-resource>
        <li >

        </li>
    </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue'

export default {
    components: {
        LearningResource
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org/'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Google all your resources.',
                    link: 'https://www.google.com/'
                },
            ]
        }
    },
}
</script>