<script setup>
import { ref, watch, onMounted } from "vue";
import { fetchMeteo } from "@/services/meteo.js";
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";

const villes = [
  { code: "bordeaux", nom: "Bordeaux", image: "/img/bordeaux_banner.jpg", position: "25% 40%" , size: "110%" },
  { code: "arcachon", nom: "Arcachon", image: "/img/arcachon_banner.jpg", position: "25% 40%" , size: "100%"},
  { code: "libourne", nom: "Libourne", image: "/img/libourne_banner.webp", position: "center 50%" , size: "100%"},
  { code: "blaye", nom: "Blaye", image: "/img/blaye_banner.webp", position: "center 50%" , size: "100%"  },
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

onMounted(() => {
  chargerMeteo();
  watch(ville, chargerMeteo);
});
</script>

<template>
  <Banner
    :villes="villes"
    v-model:ville="ville"
    :loading="loading"
    :error="error"
    :meteo="meteo"
  />
  <Card :meteo="meteo" />
</template>
