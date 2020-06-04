export default {
  getToken() {
    try {
      return JSON.parse(localStorage.getItem("vue-session-key")).jwt
    }
    catch {
      return null
    }
  },
  getNickname() {
    try {
      return JSON.parse(localStorage.getItem("vue-session-key")).nickname
    }
    catch {
      return null
    }
  },
}
