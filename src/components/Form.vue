<template>
  <div>
    <form class="form_container" @submit.prevent>
      <label for="email">Email*</label>
      <input
        class="inputText"
        id="email"
        type="email"
        placeholder="Email"
        v-model="form.email"
        required
      />
      <label for="birthDate">Date de naissance*</label>
      <input
        class="inputText"
        id="birthDate"
        type="date"
        v-model="form.birthDate"
        required
      />
      <div>
        <label for="optin">opt-in</label>
        <input id="optin" type="checkbox" v-model="form.optin" />
      </div>
      <div class="btn_container">
        <div @click="togglePillow" class="CTA">&lt;&lt;&lt; retour</div>
        <button @click="submit" class="CTA">Valider</button>
      </div>
    </form>
    <div class="message_container" v-if="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        optin: false,
        email: "",
        birthDate: null,
      },
      message: "",
    };
  },
  mounted() {
    var formState = this.$store.state.form;
    this.form.optin = formState.optin;
    this.form.email = formState.email;
    this.form.birthDate = formState.birthDate;
  },
  methods: {
    /**
     * Change la variable isPillow qui est stocké dans le parent
     * pour l'affichage des composants
     */
    togglePillow() {
      this.$parent.isPillow = !this.$parent.isPillow;
    },
    /**
     * Vérifie si this.form.email et this.form.birthDate ne sont pas null,
     * et lance la requete à l'api pour ajouter un suscriber puis affiche un message de success.
     * Sinon si il manque une information, affiche un message d'erreur.
     */
    submit() {
      if (this.form.email && this.form.birthDate) {
        this.form.choice = this.$store.state.pillows_number;
        var data = this.form;

        var config = {
          method: "post",
          url: "https://61bb0826e943920017784bb1.mockapi.io/api/v1/suscribers",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log(config);
        axios(config)
          .then(function () {
            this.$store.commit("saveForm", this.form);
            this.message = "Vos informations ont bien été sauvegardées, merci";
            setTimeout(() => {
              this.message = "";
            }, 3000);
            // console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (!this.form.email) {
        this.message = "Veuillez indiquer une adresse mail valide";
        setTimeout(() => {
          this.message = "";
        }, 3000);
      } else if (!this.form.birthDate) {
        this.message = "Veuillez indiquer une date de naissance valide";
        setTimeout(() => {
          this.message = "";
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.form_container {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}
/* .form_container input {
  width: 50%;
} */
.form_container label {
  font-weight: 600;
  font-size: 1.5rem;
}
.form_container input {
  border: 2px solid #e35525;
  background: #fefffe;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
.inputText {
  width: 50%;
}

.btn_container {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.message_container {
  margin: 1rem 1rem;
  font-size: 1.2rem;
}
</style>
