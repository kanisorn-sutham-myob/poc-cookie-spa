<template>
  <div class="hello">
    <h1>SameSite Cookie POC App</h1>
    <h3>backend-service domain</h3>
    <div>
      <button v-on:click="createCookieBackend">
        createCookie <i>with</i> <b>backend-service domain</b>
      </button>
      <button v-on:click="setC4CookieBackend">
        setCookie (Only C4) <i>with</i> <b>backend-service domain</b>
      </button>
    </div>
    <h3>Same as this domain</h3>
    <button v-on:click="createCookieSameDomain">
      createCookie <i>with</i> <b>this domain</b>
    </button>
    <button v-on:click="setC4CookieSameDomain">
      setCookie (Only C4) <i>with</i> <b>this domain</b>
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
