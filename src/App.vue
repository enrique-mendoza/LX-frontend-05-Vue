<template>
  <nav>
    <router-link to="/">Order here</router-link> |
    <router-link to="/request">Request</router-link>
  </nav>
  <router-view />
</template>

<style>
html,
body {
  background-color: hsl(6, 72%, 76%);
}

h1,
h2,
span {
  color: hsl(0, 0%, 100%);
}

h2,
span {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  color: hsl(0, 0%, 100%);
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: hsl(348, 100%, 36%);
  text-decoration: underline;
}
</style>
