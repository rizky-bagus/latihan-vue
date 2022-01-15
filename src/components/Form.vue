<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <v-subheader> NPM : </v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="npmData" placeholder="Masukan NPM" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="2">
                <v-subheader> Nama : </v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="namaData" placeholder="Masukan Nama" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="2">
                <v-subheader> Kelas : </v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="kelasData" placeholder="Masukan Kelas" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <h2>{{ npm }} - {{nama}} - {{kelas}}</h2>
        </v-row>

        <v-row>
            <v-btn @click="saveData">Save</v-btn>
        </v-row>
    </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default{
  data: () => ({
      npmData : null,
      namaData: null,
      kelasData: null,
  }),
  computed : {
    ...mapGetters({
        npm : "getNpm",
        nama : "getNama",
        kelas : "getKelas"
    })
  },
  methods: {
      saveData (){
          this.$store.commit('setNpm',this.npmData)
          this.$store.commit('setNama',this.namaData)
          this.$store.commit('setKelas',this.kelasData)
      }
  }  
};
</script>
