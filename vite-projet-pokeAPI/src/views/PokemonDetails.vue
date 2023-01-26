<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute() 
const pokemon = ref(null)

function fetchPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
            pokemon.value = data
         
        })
}

// Si l'ID change, on appelle la fonction fetchPokemon
watch(route, () => fetchPokemon())

// Appel de la fonction fetchPokemon, pour récupérer les détails du pokémon
fetchPokemon()
</script>

<template>
    
    <router-link :to="`/pokemon/${index + 1}`">

        <div class="flex flex-col items-center" v-if="pokemon">
    <div class="flex flex-col items-center">
      <img :src="pokemon.sprites.front_default" class="w-32 h-32" />
      <h1 class="text-2xl font-bold">{{ pokemon.name }}</h1>
    </div>
    <div class="flex flex-col items-center">
      <h2 class="text-xl font-bold">Types</h2>
      <div class="flex flex-row">
        <span v-for="type in pokemon.types" :key="type.type.name" class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {{ type.type.name }}
          {{ type.type.stats }}
        </span>
      </div>
    </div>
  </div>
</router-link>
</template>