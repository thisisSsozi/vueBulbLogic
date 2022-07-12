const app = Vue.createApp({
  data() {
      return {
        isOn: false,
      }
  },
  methods: {
      toggleBulb(isOn) {
          if(isOn) {
              this.isOn = false
          } else {
              this.isOn = true
          }
      }
  },
});

app.mount("#app");