<template>
  <div class="hello">
    <h1>Cookie POC App</h1>
    <button v-on:click="refresh">refresh cookie</button>
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
        .get("http://localhost:3000/", {
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
