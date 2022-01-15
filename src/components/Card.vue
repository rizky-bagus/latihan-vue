<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          My Data
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ npm }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ nama }} - {{kelas}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default{
  data: () => ({}),
  computed : {
      npm() {
          return this.$store.getters.getNpm
      },
      nama() {
          return this.$store.getters.getNama
      },
      kelas() {
          return this.$store.getters.getKelas
      }
  }
};
</script>