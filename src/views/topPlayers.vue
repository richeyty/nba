<template>
  <div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('PPG')" href="#" class="pure-menu-link">PPG</a></li>
      <li class="pure-menu-item"><a @click="select('RPG')" href="#" class="pure-menu-link">RPG</a></li>
      <li class="pure-menu-item"><a @click="select('APG')" href="#" class="pure-menu-link">APG</a></li>
      <li class="pure-menu-item"><a @click="select('BPG')" href="#" class="pure-menu-link">BPG</a></li>
      <li class="pure-menu-item"><a @click="select('SPG')" href="#" class="pure-menu-link">SPG</a></li>
    </ul>
  </div>


    <div class="player" v-for="player in players" :key="player.id">

      <div class="info">

          <div class="image">
            <img :src="'/images/'+player.image">
          </div>



          <div class="stats">
            <div class ="stats-name">
              <h2>{{player.name}}</h2>
              <p>{{player.team}}</p>
            </div>
            <div class = "stats-rank">
              <h1>{{player.rank}}</h1>
              <h1>{{player.stat}}</h1>
            </div>
          </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'topPlayers',
  components: {

  },
  data() {
    return {
      category: '',
    }
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(player => player.category === this.category);
    }
  },
  methods: {
    select(category) {
      this.category = category;
    }
  }
}
</script>

<style scoped>



.info {
  display: flex;
  justify-content: space-between;


}
.players {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;


}
.player {
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #1504b0;


}
.player img {

  height: 250px;
  width: 200px;
  object-fit: cover;
}
.player .image {
  display: flex;
  justify-content: center;

}

.stats {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin: 10px;



}
.auto {
  margin-left: auto;
}

h2 {
  font-size: 20px;
}

h1 {
  font-size: 35px;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  h2 {
    font-size: 50px;
  }

  h1 {
    font-size: 45px;
  }

  .stats {
    display: block;
    margin-left: 20px;
  }

  .info {

    justify-content: flex-start;
    margin: 10px 0px 0px 20px;

  }



}

</style>
