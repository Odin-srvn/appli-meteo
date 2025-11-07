<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer id="footer">
        <div class="liste">
            <ul>
                <li><RouterLink to="/about">A Propos </RouterLink></li>
                <li><RouterLink to="/mentions">Mentions Légales</RouterLink></li>

            </ul>
        </div>
      <div class="logo-bas">
        <a href="#"><img class="logo-footer" src="/img/logo_climato.webp" alt=""></a>
      </div>
    </footer>
</template>

