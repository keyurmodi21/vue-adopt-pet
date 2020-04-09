<template>
  <b-container>
    <h1>Dogs</h1>
    <pet-table :pets="this.$store.state.dogs" species="dogs" />
  </b-container>
</template>

<script>
import dogs from '@/data/dogs.js';
import PetTable from '@/components/PetTable';

export default {
  name: 'Dogs',
  components: {
    PetTable
  },
  mounted() {
    this.$store.state.dogs = dogs;
  }
};
</script>
