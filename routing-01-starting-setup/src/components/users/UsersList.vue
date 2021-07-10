<template>
  <button @click="conirmInput">Confirm</button>
  <button @click="saveChanges" >Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteEnter (to, from, next) {
    console.log('UserList Cmp befforeRoute Enter')
    console.log(to, from)
    next();
  },
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('teams');
    },
    saveChanges() {
      console.log('saveChanges...')
      this.changesSaved = true;
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('UsersList Cmp beforeRouterLeave')
    console.log(to, from)

    if (this.changesSaved === true) {
      next();
    } else
    {
      const userWantsToLeave = confirm('Are you sure you got unsaved changes!');
      next(userWantsToLeave)
    }

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>