const app = Vue.createApp({
    data() {
        return {
            aNumber: 0
        }
    },
    methods: {
        addFive() {
            this.aNumber = this.aNumber + 5
        },
        addOne() {
            this.aNumber = this.aNumber + 1
        },
    },
    computed: {
        resultCheck() {
            if (this.aNumber < 37) {
                return 'Not there yet';
            }
            else if (this.aNumber === 37) {
                return this.aNumber;
            }
            else {
                return 'Too much!';
            }
        }
    },
    watch: {
        resultCheck() {
            const that = this;
            setTimeout(function() {
                that.aNumber = 0;
            }, 5000);
        }
    },
})

app.mount('#assignment')
