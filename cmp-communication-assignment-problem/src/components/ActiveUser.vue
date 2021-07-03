<template lang="">
    <div>
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        age: Number
    }
}
</script>
<style lang="">
    
</style>