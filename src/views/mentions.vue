<script>

export default {
  methods: {
    goToMentions() {
        this.$router.push('/mentions')
    },
  },
}

</script>
<template>
  <section>
    <h1>Mentions légales</h1>

    <h2>1. Éditeur du site</h2>
    <p>
      Le site Climato est un projet web réalisé dans le cadre de la formation
      Développeur Web & Web Mobile (DWWM) à l’AFPA de Bègles.
    </p>
    <p>
      Éditeur du site : Adam Rodrigues<br>
      Formation : DWWM 2024-2025 – AFPA Bègles<br>
      Adresse : 1 Rue Marcel Sembat, 33130 Bègles<br>
      Contact : adam.rodrigues.dev@gmail.com
    </p>

    <h2>2. Hébergement</h2>
    <p>
      Le site est hébergé à des fins pédagogiques (développement local ou hébergeur temporaire).
    </p>

    <h2>3. Propriété intellectuelle</h2>
    <p>
      Les éléments du site (textes, images, logos, code) sont la propriété de leurs auteurs
      et ne peuvent être réutilisés sans autorisation. Les données météo proviennent de
      l’API publique www.prevision-meteo.ch.
    </p>

    <h2>4. Données personnelles</h2>
    <p>
      Ce site ne collecte ni ne conserve de données personnelles. Aucune information n’est transmise à des tiers.
    </p>

    <h2>5. Responsabilité</h2>
    <p>
      Les informations affichées (prévisions, températures, etc.) sont fournies à titre indicatif
      et peuvent comporter des erreurs. L’éditeur ne peut être tenu responsable de leur exactitude.
    </p>

    <h2>6. Crédits</h2>
    <p>
      Développement : Adam Rodrigues — Technologies : Vue.js 3, Vite, JavaScript, HTML, SCSS.
    </p>

    <h2>7. Contact</h2>
    <p>
      Pour toute demande : adam.rodrigues.dev@gmail.com
    </p>
  </section>
</template>
