const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
    },
    setName(event) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
