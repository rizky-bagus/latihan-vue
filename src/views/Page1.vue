<template>
  <div class="about">
    <h1>Data Mahasiswa</h1>
    <v-container>
        <kartu-nama></kartu-nama>
    </v-container>
  </div>
</template>

<script>
  import Card from '../components/Card'

  export default {
    name: 'Card',

    components: {
      'kartu-nama' : Card,
    },
  }
</script>
