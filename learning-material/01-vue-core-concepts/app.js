const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalB: "Master vue and build amazing features!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outPutGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return this.courseGoal;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
