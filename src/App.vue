<script setup>
import { ref } from "vue";
import { fetchMeteo } from "./services/meteo.js";


const villes = [
  { code: "bordeaux", nom: "Bordeaux" },
  { code: "arcachon", nom: "Arcachon" },
  { code: "libourne", nom: "Libourne" },
  { code: "blaye", nom: "Blaye" },
  { code: "langon", nom: "Langon" }
];

const ville = ref("bordeaux");
const meteo = ref(null);
const loading = ref(false);
const error = ref("");

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
</script>

<template>
  <header id="header">
            <div class="logo">
                <a href="#"><img src="/img/logo_climato.webp" class="logo-header" alt=""></a>
            </div>
        </header>

<main id="main">

  <div class="app-container">
    <h1 >🌦️ Météo — Gironde</h1>
    
    <form class="meteo-form" @submit.prevent>
      <label for="ville">Choisir une ville :</label>
      <div class="form-group">
        <select id="ville" v-model="ville">
          <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
        <button type="button" @click="chargerMeteo">Charger</button>
      </div>
    </form>
    
    <div class="mt-4">
      <div v-if="loading" class="alert info"> Chargement...</div>
      <div v-else-if="error" class="alert error"> Erreur : {{ error }}</div>
      
      <div v-else-if="meteo">
        <div class="current">
          <h2 class="city-banner">{{ meteo.city }}</h2>
          <p>{{ meteo.current.condition }} — {{ meteo.current.tmp }}°C</p>
          <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
        </div>
        
        <section class="forecast">
          <div v-for="j in meteo.days" :key="j.day_long" class="day-card">
            <h5>{{ j.day_long }}</h5>
            <img :src="j.icon" :alt="j.condition" width="64" height="64" />
            <p>{{ j.tmin }}°C / {{ j.tmax }}°C</p>
            <p class="condition">{{ j.condition }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</main>
  
  <footer id="footer">
      <div class="liste">
        <ul>
          <li><a href="">A Propos</a></li>
          <li><a href="">Mentions Légales</a></li>
        </ul>
      </div>
      <div class="logo-bas">
        <a href="#"><img class="logo-footer" src="/public/img/logo_climato.webp" alt=""></a>
      </div>
  </footer>
</template>