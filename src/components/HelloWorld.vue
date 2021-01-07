<template>
  <div class="hello">
    <h1>TW Essential-com-au</h1>
    <h3>cookies list</h3>
    <p>
      C1__SameSiteNotSet_And_Secure:
      <u>{{ getCookie("C1__SameSiteNotSet_And_Secure") === "__value__" }} </u>
    </p>
    <p>
      C2__SameSiteNone_And_Secure:
      <u>{{ getCookie("C2__SameSiteNone_And_Secure") === "__value__" }} </u>
    </p>
    <p>
      C3__SameSiteNone_And_NoSecure:
      <u>{{ getCookie("C3__SameSiteNone_And_NoSecure") === "__value__" }} </u>
    </p>
    <p>
      C4__SameSiteNotSet_And_NoSecure:
      <u>{{ getCookie("C4__SameSiteNotSet_And_NoSecure") === "__value__" }} </u>
    </p>
    <button v-on:click="redirect">simulate redirect to tw-essential-com</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    redirect: () => {
      window.location.href =
        "http://poc-essential.jac-poc-domain-routing.link/au/";
    },
    getCookie: (cname) => {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
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

u {
  font-weight: bold;
}
</style>
