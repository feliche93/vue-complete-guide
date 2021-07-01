const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmedName: ''
    };
  },
  methods: {
    outputFullName() {
      if (this.yourName === '') {
        return '';
      }
      return this.yourName + ' ' + 'Vemmer';
    },
    addCount(num) {
      this.counter = this.counter + num;
    },
    subtractCount(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.yourName = event.target.value;
    },
    resetInput() {
      this.yourName = ''
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.yourName
    }
  },
  computed: {
    fullName() {
      console.log('Running again...')
      if (this.yourName === '') {
        return '';
      }
      return this.yourName + ' ' + 'Vemmer';
    }
  },
});

app.mount('#events');
