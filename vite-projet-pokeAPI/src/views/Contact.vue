<script setup lang="ts">
import { ref } from 'vue'
import Card from "../components/Card.vue";

const name = ref('')
const firstname = ref('')
const email = ref('')
const message = ref('')

function onSubmit() {
  console.log(this.name)
  console.log(this.firstname)
  console.log(this.email)
  console.log(this.message)
}
</script>

<template>
<Card>
<div class="card">
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="nom" v-model="name" /><br><br>
            <input type="text" placeholder="prénom" v-model="firstname" /><br><br>
            <input type="text" placeholder="email" v-model="email" /><br><br>
            <textarea v-model="message" placeholder="message"></textarea><br><br>
            <button type="submit">Envoyer</button>
        </form>
</div>
</Card>
</template>