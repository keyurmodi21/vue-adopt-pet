<template>
  <b-container>
    <h1>Cats</h1>
    <pet-table :pets="cats" species="cats" />
  </b-container>
</template>

<script>
import PetTable from '@/components/PetTable';
import { mapState } from 'vuex';

export default {
  name: 'Cats',
  components: {
    PetTable
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['cats'])
  }
};
</script>
