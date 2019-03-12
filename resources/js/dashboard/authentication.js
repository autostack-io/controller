export default {
  get personalAccessToken() {
    return localStorage.getItem("access_token");
  },

  set personalAccessToken(token) {
    localStorage.setItem("access_token", token);
  },

  createPersonalAccessToken() {
    return new Promise((resolve, reject) => {
      window.axios.post("/oauth/personal-access-tokens", {
        name: "autostack",
        scopes: [],
      }).then((res) => {
        if (res.data.accessToken) {
          resolve(res.data.accessToken);
        } else {
          reject(res);
        }
      }, (err) => {
        reject(err);
      });
    });
  },

  checkPersonalAccessToken(token) {
    return window.axios.get("/api/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}