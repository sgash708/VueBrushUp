export const sec11TokyoNumber = {
  data() {
    return {
      title: "Welcome to tokyo",
      subTitle: "Tokyo is a great city",
      number: 0
    };
  },

  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}
