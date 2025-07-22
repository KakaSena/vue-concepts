const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("this works");
    },
    saveInput(event) {
      this.text = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.text;
    },
  },
});

app.mount("#assignment");
