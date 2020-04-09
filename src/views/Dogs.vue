<template>
  <b-container>
    <h1>Dogs</h1>
    <pet-table :pets="dogs" species="dogs" />
  </b-container>
</template>

<script>
import PetTable from '@/components/PetTable';
import { mapState } from 'vuex';

export default {
  name: 'Dogs',
  components: {
    PetTable
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['dogs'])
  }
};
</script>
