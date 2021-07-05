<template>
  <div>
    <div
      class="
        mt-5
        sm:mt-6
        sm:grid sm:grid-cols-2
        sm:gap-3
        sm:grid-flow-row-dense
      "
    >
      <base-button
        type="button"
        class="
          w-full
          inline-flex
          justify-center
          rounded-md
          border border-transparent
          shadow-sm
          px-4
          py-2
          bg-indigo-600
          text-base
          font-medium
          text-white
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          sm:col-start-2
          sm:text-sm
        "
        @click="setSelectedTab('stored-resources')"
      >
        Stored Resources
      </base-button>
      <base-button
        type="button"
        class="
          mt-3
          w-full
          inline-flex
          justify-center
          rounded-md
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-base
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          sm:mt-0
          sm:col-start-1
          sm:text-sm
        "
        @click="setSelectedTab('add-resource')"
      >
        Add Resource
      </base-button>
    </div>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google all your resources.',
          link: 'https://www.google.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id : new Date().toISOString(),
        title: title,
        description: description,
        url : url
      }

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources'
    }
  },
};
</script>