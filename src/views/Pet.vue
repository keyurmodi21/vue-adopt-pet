<template>
  <div>
    <h1>Pet Details</h1>
    <h2>{{ animal.name }} ({{ this.$route.params.species }})</h2>
    <h4>Age: {{ animal.age }} years</h4>
    <h4>Breed: {{ animal.breed }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Pet',
  data() {
    return { animal: {} };
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted() {
    console.log(this);
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
};
</script>
