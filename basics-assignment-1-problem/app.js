const app = Vue.createApp({
  data() {
    return {
      myName: 'Felix Vemmer',
      myAge: 28,
      imgLink: 'https://picsum.photos/id/237/200/300',
    };
  },
  methods: {
    outputRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
    ageInXYears(year) {
      const ageOputput = this.myAge + year;
      return ageOputput;
    },
  },
});

app.mount('#assignment')
