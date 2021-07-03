<template lang="">
    <div>
        <form @submit.prevent="submitData">
            <label>Name</label>
            <input v-model="enteredName" type="text">
            <label>Age</label>
            <input v-model="enteredAge" type="number">
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            enteredName : '',
            enteredAge : ''
        }
    },
    emits: ['form-data'],
    methods: {
        submitData() {
            this.$emit(
                'form-data',
                this.enteredName,
                this.enteredAge
                )
        this.enteredName = ''
        this.enteredAge = ''
        }
    },
}
</script>
<style lang="">
    
</style>