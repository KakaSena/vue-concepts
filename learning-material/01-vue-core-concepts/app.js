const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outPutGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return "learn vue";
      } else {
        return "master vue";
      }
    },
  },
});

app.mount("#user-goal");
