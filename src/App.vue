<template>
  <h1>Newspaper Performance Indicators</h1>
  <nav>
    <router-link :to="{name: 'analytics'}">Analytics</router-link> |
    <router-link :to="{name: 'geo'}">Geographic</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {border: 1px solid blue}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
