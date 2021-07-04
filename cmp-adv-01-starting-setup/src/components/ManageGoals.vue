<template>
<div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to='body'>
    <error-alert v-if="inputisInvalid">
        <h2>Input is invalid!</h2>
        <p>Input cannot be empty</p>
        <button @click="conirmError">Okay</button>
    </error-alert>
     </teleport>
</div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputisInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputisInvalid = true;
            }

        },
        conirmError() {
            this.inputisInvalid = false;
        }
    },
}
</script>