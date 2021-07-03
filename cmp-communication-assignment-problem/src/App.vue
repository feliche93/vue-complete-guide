<template lang="">
    <div>
        <user-data @form-data="addData" ></user-data>
        <active-user
            v-for="activeUser in activeUsers" :key="activeUser.id"
            :name="activeUser.name"
            :age="activeUser.age"
        ></active-user>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeUsers : [
                {
                    id: 'felix',
                    name: 'Felix Vemmer',
                    age: 28
                },
                {
                    id: 'lucas',
                    name: 'Lucas',
                    age: 25
                }
            ]
        }
    },
    methods: {
        addData(formName, formAge) {
            const newRecord = {
                id : formName.toLowerCase(),
                name : formName,
                age: parseInt(formAge)
            }

            this.activeUsers.push(newRecord);
        }
    },
}
</script>
<style lang="">
    
</style>