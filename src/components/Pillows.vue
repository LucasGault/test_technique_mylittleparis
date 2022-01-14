<template>
  <div>
    <div class="pillows_container">
      <img
        :src="require(`../assets/coussins/${$store.state.pillows_number}.png`)"
        :alt="$store.state.pillows_number"
      />
    </div>
    <div>
      <div class="pillows_choice">
        <div class="button_container">
          <svg
            v-if="$store.state.pillows_number != 1"
            @click="removePillow"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="31"
              fill="#FEFFFE"
              stroke="#E35525"
              stroke-width="2"
            />
            <path d="M14 32H50.5" stroke="#E35525" stroke-width="4" />
          </svg>
        </div>
        <div class="pillows_number">{{ $store.state.pillows_number }}</div>
        <div class="button_container">
          <svg
            v-if="$store.state.pillows_number != 10"
            @click="addPillow"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="31"
              fill="#FEFFFE"
              stroke="#E35525"
              stroke-width="2"
            />
            <path d="M14 32H50.5" stroke="#E35525" stroke-width="4" />
            <path d="M32 14V50.5" stroke="#E35525" stroke-width="4" />
          </svg>
        </div>
      </div>
      <div class="next_container">
        <button @click="togglePillow" class="CTA">Suivant >>></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pillows_number: 1,
    };
  },
  methods: {
    /**
     * Lance la fonction @function addPillow du vuex
     * si pillows_number est inférieur à 10
     */
    addPillow() {
      if (this.$store.state.pillows_number < 10) {
        // this.pillows_number++;
        this.$store.commit("addPillow");
      }
    },
    /**
     * Lance la fonction @function removePillow du vuex
     * si pillows_number est supérieur à 1
     */
    removePillow() {
      if (this.$store.state.pillows_number > 1) {
        // this.pillows_number--;
        this.$store.commit("removePillow");
      }
    },
    /**
     * Change la variable isPillow qui est stocké dans le parent
     * pour l'affichage des composants
     */
    togglePillow() {
      this.$parent.isPillow = !this.$parent.isPillow;
    },
  },
};
</script>

<style scoped>
.pillows_container {
  width: 95%;
  max-width: 500px;
  margin: 2rem auto;
}

.pillows_container img {
  width: 100%;
}

.pillows_choice {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
}

.pillows_number {
  font-size: 4rem;
}

.button_container {
  width: 64px;
}

.next_container {
  width: fit-content;
  margin: 2rem auto 0 auto;
}
</style>
