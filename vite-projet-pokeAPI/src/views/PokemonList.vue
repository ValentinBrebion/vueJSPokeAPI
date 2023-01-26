<script setup lang="ts">

import Card from "../components/Card.vue";
import { ref } from 'vue'

const pokemons = ref([])
function getPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
      pokemons.value = data.results
      console.log(pokemons)
    })
}

getPokemons()
// À l'étape suivante vous allez ajouter le code pour récupérer la liste des pokémons
</script>

<template>
  <h1>Pokémons Liste</h1>

  <div>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="(poke, index) in pokemons" :key="poke.name">
                <Card>
                    <div class="text-center">{{ poke.name }}</div>
                </Card>
            </div>
        </div>
    </div>
     
     
</template>

<style scoped>
</style>