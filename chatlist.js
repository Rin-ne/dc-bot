
const chatList = [
  {
    trigger: "Hi, Viola",
    response: (r) => {
      return "Hi, " + r.author.username
    }
  },
  {
    trigger: "I Love You, Viola",
    response: (r) => {
      return "I love you too, " + r.author.username
    }
  }
]

module.exports = chatList