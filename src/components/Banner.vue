<script setup>
import { computed } from "vue";


const props = defineProps({
  villes: Array,
  ville: String,
  loading: Boolean,
  error: String,
  meteo: Object,
});


const emit = defineEmits(["update:ville"]);


const imageVille = computed(() => {
  const current = props.villes.find(v => v.code === props.ville);
  return current ? current.image : "/img/default_banner.jpg";
});

const backgroundPosition = computed(() => {
  const current = props.villes.find(v => v.code === props.ville);
  return current ? current.position : "center";
});

const backgroundSize = computed(() => {
  const current = props.villes.find(v => v.code === props.ville);
  return current ? current.size : "cover";
});


function updateVille(event) {
  emit("update:ville", event.target.value);
}
</script>

<template>
  <div class="app-container">
    <div
      class="banner"
      :class="props.ville"
      :style="{
        backgroundImage: `url(${imageVille})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
      }"
    >
      <h1>
        <span class="title">{{ props.ville.charAt(0).toUpperCase() + props.ville.slice(1) }}</span>
      </h1>
    </div>

    <form class="meteo-form" @submit.prevent>
      <label for="ville">Choisir une ville </label>
      <div class="form-group">
        <select id="ville" :value="props.ville" @change="updateVille">
          <option v-for="v in props.villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
      </div>
    </form>

    <div>
      <div v-if="props.loading" class="alert info">Chargement...</div>
      <div v-else-if="props.error" class="alert error">Erreur : {{ props.error }}</div>
    </div>
  </div>
</template>
