<template>
  <div class="hello">
    <h1>Cookie POC App</h1>
    <button v-on:click="refresh">refresh cookie</button>
    <button v-on:click="setNewCookie">
      set Only SameSiteNotSetAndNotSecure to be SameSiteNoneAndSecure)
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    refresh: async () => {
      const data = await axios
        .get("https://moobyang-poc-cookie.herokuapp.com/refresh", {
          withCredentials: true,
        })
        .then((res) => res.data);
      console.log(data);
    },
    setNewCookie: async () => {
      const data = await axios
        .get("https://moobyang-poc-cookie.herokuapp.com/set-new-cookie", {
          withCredentials: true,
        })
        .then((res) => res.data);
      console.log(data);
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
</style>
