<template>
  <b-container>
    <h1>Cats</h1>
    <b-table striped hover :items="cats"></b-table>
  </b-container>
</template>

<script>
import cats from '@/data/cats.js';

export default {
  name: 'Cats',
  data() {
    return {
      cats
    };
  }
};
</script>
