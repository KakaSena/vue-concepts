const app = Vue.createApp({
  data() {
    return {
      BoxASelected: false,
      BoxBSelected: false,
      BoxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.BoxASelected = true;
      } else if (box === "B") {
        this.BoxBSelected = true;
      } else if (box === "C") {
        this.BoxCSelected = true;
      }
    },
  },
});

app.mount("#styling");
