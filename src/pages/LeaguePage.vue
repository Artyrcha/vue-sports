<template>
  <div>
    <ui-title-page>{{ league.title }}</ui-title-page>
    <div class="league-info">
      <h4>{{ league.country }}</h4>
    </div>
    <div v-if="standing" class="standing-table table table-responsice">
      <table>
        <thead>
          <tr>
            <th colspan="3">{{ league.title }}</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF:GA</th>
            <th>+/-</th>
            <th>PTS</th>
            <th>FORM</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="team in standing"
            :key="team.rank"
            class="standing-table__item"
          >
            <td>
              <div class="fw-600">{{ team.rank }}</div>
            </td>
            <td>
              <div class="standing-table__item-image flex-img">
                <img :src="team.team.logo" :alt="team.team.title" />
              </div>
            </td>
            <td>
              <div class="fw-600">{{ team.team.title }}</div>
            </td>
            <td>{{ team.played_all }}</td>
            <td>{{ team.win_all }}</td>
            <td>{{ team.draw_all }}</td>
            <td>{{ team.lose_all }}</td>
            <td>{{ team.goals_for_all }}:{{ team.goals_against_all }}</td>
            <td>{{ team.goals_for_all - team.goals_against_all }}</td>
            <td>
              <div class="fw-600">{{ team.points }}</div>
            </td>
            <td>
              <div class="standing-table__item-form">
                <span
                  v-for="formItem in teamForm(team.form)"
                  :key="formItem.key"
                  :class="formItem.class"
                  >{{ formItem.text }}</span
                >
                {{}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LeaguePage",
  methods: {
    ...mapActions({
      fetchLeague: "leagues/fetchLeague",
      fetchStanding: "standings/fetchStanding",
    }),
    teamForm(form) {
      let res = [];
      if (form) {
        res = form.split("").map((el, idx) => {
          switch (el) {
            case "W":
              return {
                key: idx,
                text: el,
                class: "_win",
              };
            case "D":
              return {
                key: idx,
                text: el,
                class: "_draw",
              };
            case "L":
              return {
                key: idx,
                text: el,
                class: "_lose",
              };
          }
        });
      }
      return res;
    },
  },
  computed: {
    ...mapGetters({
      league: "leagues/getLeague",
    }),
    ...mapGetters({
      standing: "standings/getStanding",
    }),
  },
  mounted() {
    const league_id = this.$route.params.id;
    this.fetchLeague(league_id);
    this.fetchStanding(league_id);
  },
};
</script>

<style lang="scss" scoped>
.standing-table {
  width: 50%;
  table {
    width: 100%;
    border: 1px solid;
    thead {
      background-color: var(--clr-main);
    }
    tbody {
      background-color: rgba(var(--bs-dark-rgb), 0.05);
      tr {
        &:last-child {
          border: none;
        }
      }
    }
    th,
    td {
      padding: 0.1rem;
      &:first-child {
        padding-left: 0.2rem;
      }
    }
    th {
      &:not(:first-child) {
        text-align: center;
      }
      &:last-child {
        text-align: left;
      }
    }
    td {
      &:nth-child(1) {
        width: 25px;
      }
      &:nth-child(2) {
        width: 30px;
      }
      &:nth-child(n + 4) {
        text-align: center;
      }
      &:last-child {
        text-align: left;
        width: 115px;
      }
    }
  }
  &__item {
    padding: 0;
    transition: all 0.2s linear;
    &:hover {
      color: white;
      background-color: rgba(var(--bs-dark-rgb), 0.8);
      box-shadow: 0 0 3px rgba(var(--bs-dark-rgb), 0.2);
    }
    &-image {
      width: 1.2rem;
    }
    &-form {
      > span {
        display: inline-block;
        vertical-align: text-top;
        margin: 0 0.1rem;
        width: 18px;
        line-height: 18px;
        font-size: 12px;
        text-align: center;
        color: #fff;
        &._win {
          background-color: var(--bs-success);
        }
        &._draw {
          background-color: var(--bs-warning);
        }
        &._lose {
          background-color: var(--bs-danger);
        }
      }
    }
  }
}
</style>
