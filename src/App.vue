<script setup>
import { ref, watch, computed } from "vue";
import { fetchMeteo } from "./services/meteo.js";
import { Resultat } from "./components/Resultat.vue";
import { RouterView } from "vue-router";


const villes = [
  { code: "bordeaux", nom: "Bordeaux", image: "/img/bordeaux_banner.jpg" },
  { code: "arcachon", nom: "Arcachon", image: "/img/arcachon_banner.jpg"},
  { code: "libourne", nom: "Libourne", image: "/img/libourne_banner.webp" },
  { code: "blaye", nom: "Blaye", image: "/img/blaye_banner.webp"  },
];

const imageVille = computed(() => {
  const current = villes.find(v => v.code === ville.value);
  return current ? current.image : "/img/default_banner.jpg";
});

const ville = ref("bordeaux");
const meteo = ref(null);
const loading = ref(false);
const error = ref("");

onMounted(async () => {
  async function chargerMeteo() {
    error.value = "";
    loading.value = true;
    meteo.value = null;
    try {
      meteo.value = await fetchMeteo(ville.value);
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }
  chargerMeteo();
  watch(ville, chargerMeteo);
})

</script>


<template>
  <header id="header">
    <div class="logo">
      <a href="#"><img src="/img/logo_climato.webp" class="logo-header" alt=""></a>
    </div>
  </header>

  <main id="main">

  <div class="app-container">
    <div class="banner"
    :class="ville"
    :style="{
    backgroundImage: `url(${imageVille})`,
  }">
        <h1>
          <span class="title">{{ ville.charAt(0).toUpperCase() + ville.slice(1) }}</span>
        </h1>
      </div>


      <form class="meteo-form" @submit.prevent>
        <label for="ville">Choisir une ville </label>
        <div class="form-group">
          <select id="ville" v-model="ville">
            <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
          </select>

        </div>
      </form>
      <div class="">
        <div v-if="loading" class="alert info"> Chargement...</div>
        <div v-else-if="error" class="alert error"> Erreur : {{ error }}</div>

        <div v-else-if="meteo">
        </div>
      </div>
      </div>
  </main>


  <footer id="footer">
    <div class="liste">
      <ul>
        <router-link to="/about">A Propos</router-link>
        <router-link to="/mentions">Mentions</router-link>
      </ul>
    </div>
    <div class="logo-bas">
      <a href="#"><img class="logo-footer" src="/img/logo_climato.webp" alt=""></a>
    </div>
  </footer>
</template>
