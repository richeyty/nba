<template>
  <div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('West')" href="#" class="pure-menu-link">West</a></li>
      <li class="pure-menu-item"><a @click="select('East')" href="#" class="pure-menu-link">East</a></li>
    </ul>
  </div>


    <div class="team" v-for="team in teams" :key="team.id">

      <div class="info">

          <div class="stats">

            <div class ="stats-rank">
              <h1>{{team.rank}}</h1>
            </div>
            <div class ="stats-name">
              <h1>{{team.name}}</h1>
            </div>
            <div class="stats-record">
              <h2>{{team.wins}}</h2>
              <h2>{{team.losses}}</h2>
            </div>
          </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Standings',
  components: {
  },
  data() {
    return {
      conference: '',
    }
  },
  computed: {
    teams() {
      return this.$root.$data.teams.filter(team => team.conference === this.conference);
    }
  },
  methods: {
    select(conference) {
      this.conference = conference;
    }
  }
}
</script>

<style scoped>

.team {
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #1504b0;

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "rank name record";
    margin-bottom: 10px;
  }

  .stats-record {

    padding-left: 80%;

  }



  .stats-name {
    
    padding-left: 20%;
  }




}

</style>
