const app = Vue.createApp({
  data() {
    return {
      name: "Kaká",
      age: 30,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    };
  },
  methods: {
    ageInFive() {
      return this.age + 5;
    },
    favRandom() {
      return Math.random().toFixed(2);
    },
  },
});

app.mount("#assignment");
