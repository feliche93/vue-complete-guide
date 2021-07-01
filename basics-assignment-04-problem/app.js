const app = Vue.createApp({
    data() {
        return {
            userInputField : '',
            paragraphIsVisible : true,
            inputBackgroundColor: ''
        }
    },
    methods: {
        toogleParagraphVisibility() {
            this.paragraphIsVisible= !this.paragraphIsVisible;
            console.log(this.paragraphIsVisible)
        }
    },
    computed: {
        paragraphStyle() {
            return {
                user1: this.userInputField === 'user1',
                user2: this.userInputField === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible

            }
        }
    }
})

app.mount('#assignment')