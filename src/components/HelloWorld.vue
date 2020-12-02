<template>
  <div class="hello">
    <h1>SameSite Cookie POC App</h1>
    <h3>backend-service domain</h3>
    <div>
      <button v-on:click="createCookieBackend">
        createCookie for backend-service domain
      </button>
      <button v-on:click="setC4CookieBackend">
        setCookie (Only C4) for backend-service domain
      </button>
    </div>
    <h3>Same as this domain</h3>
    <button v-on:click="createCookieBackend">
      createCookie for backend-service domain
    </button>
    <button v-on:click="setC4CookieBackend">
      setCookie (Only C4) for backend-service domain
    </button>
  </div>
</template>

<script>
import axios from "axios";

const defaultAxiosConfig = { withCredentials: true };

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    createCookieBackend: () => {
      axios.get(
        "https://moobyang-poc-cookie.herokuapp.com/get_cookies",
        defaultAxiosConfig
      );
    },
    setC4CookieBackend: () => {
      axios.get(
        "https://moobyang-poc-cookie.herokuapp.com/set_new_cookie",
        defaultAxiosConfig
      );
    },
    createCookieSameDomain: () => {
      axios.get("/get_cookies", defaultAxiosConfig);
    },
    setC4CookieSameDomain: () => {
      axios.get("/set_new_cookie", defaultAxiosConfig);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  margin: 4px;
}
</style>
