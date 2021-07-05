<template>
  <base-card>
    <form @submit.prevent="sbumitData">
      <div class="py-3">
        <label for="email" class="block font-medium text-gray-700">Title</label>
        <div class="mt-1">
          <input
            type="text"
            name="title"
            id="title"
            class="
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              block
              w-full
              border-gray-600
              rounded-md
            "
            placeholder="Your Title"
            ref="titleInput"
          />
        </div>
      </div>
      <div class="py-3">
        <label for="description" class="block font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <input
            type="text-area"
            name="description"
            id="description"
            class="
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              block
              w-full
              border-gray-600
              rounded-md
            "
            placeholder="Your Title"
             ref="descriptionInput"
          />
        </div>
      </div>
      <div class="py-3">
        <label for="link" class="block font-medium text-gray-700">Link</label>
        <div class="mt-1">
          <input
            type="url"
            name="link"
            id="link"
            class="
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              block
              w-full
              border-gray-600
              rounded-md
            "
            placeholder="Your Title"
            ref="linkInput"
          />
        </div>
      </div>
      <div>
          <base-button class=" bg-indigo-700 text-white ">
          Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    methods: {
        sbumitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredLink = this.$refs.linkInput.value;

        this.addResource(enteredTitle, enteredDescription, enteredLink)
    },
    }
}
</script>