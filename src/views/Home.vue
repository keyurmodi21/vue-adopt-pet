<template>
  <b-container class="home">
    <h4>Welcome to pet adoption store</h4>
    <h6>{{ animalsCount }}</h6>
    <h6>{{ getAllCats.length }}</h6>
    <b-button @click="handleAddNewPet" variant="outline-primary">+ Add new Pet</b-button>

    <b-form @submit.prevent="handleSubmit" @reset="handleReset" v-if="showForm">
      <b-form-group id="input-group-1" label="Pet Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="petForm.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="petForm.age"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="petForm.species"
          :options="speciesData"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      showForm: false,
      petForm: {
        name: '',
        age: 0,
        species: null
      },
      speciesData: ['cats', 'dogs']
    };
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats'])
  },
  methods: {
    ...mapActions(['addPet']),
    handleAddNewPet() {
      this.showForm = !this.showForm;
    },
    handleSubmit(event) {
      const { species, age, name } = this.petForm;
      const payload = {
        species,
        pet: {
          age,
          name
        }
      };

      this.addPet(payload);

      this.handleReset(event);
    },
    handleReset(evt) {
      evt.preventDefault();

      // Reset our form values
      this.petForm.name = '';
      this.petForm.age = 0;
      this.petForm.species = null;

      // Trick to reset/clear native browser form validation state
      this.showForm = false;
    }
  }
};
</script>
