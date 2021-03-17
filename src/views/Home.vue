<template>
  <div class="home">

    <div class = "firstBox">

      <router-link to="/topPlayers">
        <div class = "button">
          <h2> SEE TOP PLAYERS </h2>
        </div>
      </router-link>
    </div>




    <div class = "secondBox">

      <router-link to="/standings">
        <div class = "button">
          <h2> STANDINGS </h2>
        </div>
      </router-link>
    </div>

    <div class = "footer">
      <p> Here is the link to my gitHub: <a href="https://github.com/richeyty/cp3.tylerrichey.org"> GitHub </a>  </p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}






.firstBox {
  width: 100%;
  height: 200px;
  background: url(/images/3players.jpg);
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.secondBox {
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: 200px;
  background: url(/images/nba_4players.jpg);
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.button {
  height: 30px;
  display: flex;
  align-items: center;
  background-color: white;
  text-align: center;
  margin: 10px 10px;
  padding: 30px;
  border-radius: 30px;
  font-style: italic;
}

.button:hover {
  background-color: black;
  color: white;
}

.button:active {
  background-color: black;
  color: white;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.footer {
  width: 100%;

  background-color: black;
  height: 100px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  background-color: white;
  border-radius: 10px;
  padding: 1px;
}


.home {
  background-color: #b4b8bf;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.home a {
  color: black;
  text-decoration: none;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  p {
    font-size: 25px;
  }
  .firstBox {
    width: 100%;
    height: 810px;

    background-size: contain;
    align-items: center;
  }

  .secondBox {

    height: 810px;
    align-items: center;
    background-size: contain;

  }



  h2 {
    font-size: 40px;
  }
}
</style>
