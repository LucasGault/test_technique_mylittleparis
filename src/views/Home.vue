<template>
  <div class="home">
    <h1 class="title">Combien d'oreillers dans votre vie ?</h1>
    <Pillows v-if="isPillow"></Pillows>
    <Form v-if="!isPillow"></Form>
    <router-link :to="{ name: 'Suscribers' }">
      Voir la liste des abonnés
    </router-link>
  </div>
</template>

<script>
import Pillows from "../components/Pillows.vue";
import Form from "../components/Form.vue";
export default {
  name: "Home",
  components: { Pillows, Form },
  data() {
    return {
      isPillow: true,
    };
  },
};
</script>

<style scoped>
.home {
  height: 90vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.title {
  font-weight: 800;
  padding: 1rem 0 0 1rem;
  margin-bottom: 4rem;
}
</style>
