<template>
  <div class="sub">
    <h2 class="title">Listes des abonnés</h2>
    <div class="suscribers_container" v-if="suscribers.length > 0">
      <div
        class="suscriber_container"
        v-for="suscriber in suscribers"
        :key="suscriber.id"
      >
        <!-- {{ suscriber }} -->
        <p>
          Email : <span>{{ suscriber.email }}</span>
        </p>
        <p>
          Date de naissance : <span>{{ suscriber.birthDate }}</span>
        </p>
        <p>
          choice : <span>{{ suscriber.choice }}</span>
        </p>
        <p>
          optin : <span>{{ suscriber.optin }}</span>
        </p>
      </div>
    </div>
    <router-link :to="{ name: 'Home' }"> Return Home </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      suscribers: [],
    };
  },
  mounted() {
    this.getSuscribers();
  },
  methods: {
    /**
     * Récupère la lilste des suscriber à partir de l'api
     */
    getSuscribers() {
      const self = this;
      var config = {
        method: "get",
        url: "https://61bb0826e943920017784bb1.mockapi.io/api/v1/suscribers",
      };

      axios(config)
        .then(function (response) {
          // console.log(response.data);
          self.suscribers = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.sub {
  padding-bottom: 2rem;
}
.title {
  font-weight: 800;
  padding: 1rem 0 0 1rem;
  margin-bottom: 2rem;
}

.suscribers_container {
  margin: 0 1rem;
}
.suscriber_container {
  margin: 1rem 0;
}
.suscriber_container p {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1px;
}
.suscriber_container span {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
