<template>
<div id="app">
  <div id="menu">
      <router-link to="/">
        <img src="/images/basketball.png">
      </router-link>
  </div>
  <div id="title">
    <h1> NBA HOOPS </h1>
  </div>

  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  margin-top: 5px;
}
#title {
  
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  font-style: italic;
}

#menu {
  display: flex;
  justify-content: center;
}

#menu img {
  width: 100px;
}


</style>
