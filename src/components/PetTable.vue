<template>
  <b-table striped hover :items="pets">
    <template v-slot:cell(name)="data">
      <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'PetTable',
  props: {
    pets: Array,
    species: String
  }
};
</script>
