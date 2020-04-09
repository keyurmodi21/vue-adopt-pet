<template>
  <b-container>
    <h1>Cats</h1>
    <pet-table :pets="this.$store.state.cats" species="cats" />
  </b-container>
</template>

<script>
import cats from '@/data/cats.js';
import PetTable from '@/components/PetTable';

export default {
  name: 'Cats',
  components: {
    PetTable
  },
  mounted() {
    this.$store.state.cats = cats;
  }
};
</script>
