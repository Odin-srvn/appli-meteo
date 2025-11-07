<script>
export default {
    methods: {
        goToResultat() {
            this.$router.push('/resultat')
        }
    }
}
</script>
<template>
    <div>
        <section class="forecast">
            <div v-for="j in meteo.days" :key="j.day_long" class="day-card">
                <h5>{{ j.day_long }}</h5>
                <img :src="j.icon" :alt="j.condition" width="64" height="64" />
                <p class="temp">{{ j.tmin }}°C / {{ j.tmax }}°C</p>
                <p class="condition">{{ j.condition }}</p>
            </div>
        </section>
    </div>
</template>