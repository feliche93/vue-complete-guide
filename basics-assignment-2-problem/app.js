const app = Vue.createApp({
    data() {
        return {
            alertMessageString:'This is an alert!',
            userInput:'',
            userInputConfirmed:''
        }
    },
    methods: {
        showAlertMessage() {
            alert(this.alertMessageString);
        },
        addUserInput(event) {
            this.userInput = event.target.value
        },
        addUserInputConfirmed(event) {
            this.userInputConfirmed = event.target.value
        }
    },
})

app.mount('#assignment')
