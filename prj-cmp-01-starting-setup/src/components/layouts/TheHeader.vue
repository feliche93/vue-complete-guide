<template>
  <div class="bg-gray-700 mb-10">
    <div class="max-w-10xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:px-8 lg:flex lg:justify-center">
      <div class="max-w-xl">
        <h2 class="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-5xl">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    props: ['title']
}
</script>