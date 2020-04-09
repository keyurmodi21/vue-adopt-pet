export default {
  appendPet: (state, { species, pet }) => {
    console.log(state);
    state[species].push(pet);
  }
};
