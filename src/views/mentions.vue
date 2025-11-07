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
  <section class="mentions-legales">
    <h1>Mentions légales</h1>

    <h2>1. Éditeur du site</h2>
    <p>
      Le site <strong>Climato</strong> est un projet web réalisé dans le cadre de la formation 
      <strong>Développeur Web & Web Mobile (DWWM)</strong> à l’<strong>AFPA de Bègles</strong>.
    </p>
    <p>
      Éditeur du site : <strong>Adam Rodrigues</strong><br />
      Formation : DWWM 2024-2025 – AFPA Bègles<br />
      Adresse : 1 Rue Marcel Sembat, 33130 Bègles<br />
      Contact : <a href="mailto:adam.rodrigues.dev@gmail.com">adam.rodrigues.dev@gmail.com</a>
    </p>

    <h2>2. Hébergement</h2>
    <p>
      Le site est hébergé sur les serveurs locaux de développement dans le cadre de la formation,
      ou sur un hébergeur temporaire à des fins de démonstration pédagogique.
    </p>

    <h2>3. Propriété intellectuelle</h2>
    <p>
      L’ensemble des éléments composant le site (textes, images, logos, code source, design, etc.)
      sont la propriété de leurs auteurs respectifs et ne peuvent être reproduits ou utilisés
      sans autorisation préalable.
    </p>
    <p>
      Les données météo affichées sont issues de l’API publique 
      <a href="https://www.prevision-meteo.ch" target="_blank" rel="noopener noreferrer">
        www.prevision-meteo.ch
      </a>.
    </p>

    <h2>4. Données personnelles</h2>
    <p>
      Ce site ne collecte ni ne conserve aucune donnée personnelle.
      Aucune information n’est transmise à des tiers.
    </p>

    <h2>5. Responsabilité</h2>
    <p>
      Le site <strong>Climato</strong> est proposé à titre de démonstration. 
      Les informations fournies (températures, prévisions, etc.) peuvent contenir des erreurs 
      ou imprécisions liées à la source de données. 
      L’éditeur ne saurait être tenu responsable de leur exactitude.
    </p>

    <h2>6. Crédits</h2>
    <p>
      Développement : <strong>Adam Rodrigues</strong><br />
      Icônes & visuels : <a href="https://www.prevision-meteo.ch" target="_blank" rel="noopener noreferrer">Prevision-Meteo.ch</a>, ressources libres de droits.<br />
      Technologies utilisées : Vue.js 3, Vite, JavaScript, HTML, SCSS.
    </p>

    <h2>7. Contact</h2>
    <p>
      Pour toute demande d’information, vous pouvez écrire à : 
      <a href="mailto:adam.rodrigues.dev@gmail.com">adam.rodrigues.dev@gmail.com</a>.
    </p>
  </section>
</template>