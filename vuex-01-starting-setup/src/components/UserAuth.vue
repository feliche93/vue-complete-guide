<template>
<div>
    <button v-if="!userIsAuthenticated" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

    methods: {
        ...mapActions(['login','logout'])
    },
    computed: {
        ...mapGetters(['userIsAuthenticated'])
    }


}
</script>