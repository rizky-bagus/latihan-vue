<template>
  <v-app>
    <v-app-bar
      clipped-left
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2>Widyatama - Web Programming</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.widyatama.ac.id/"
        target="_blank"
        text
      >
        <span class="mr-2">My Universitas</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

      <v-navigation-drawer permanent app clipped fixed>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              My Application
            </v-list-item-title>
            <v-list-item-subtitle>
              NPM  - Nama
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>

    <v-footer app padless color="primary" dark>
      <v-col cols="12">
        <h3 color="white">NPM -NAMA All Right reserved 2021 - 2022</h3>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Page 1', icon: 'mdi-view-dashboard', to: '/hal-1' },
          { title: 'Page 2', icon: 'mdi-image', to: '/hal-2' },
        ]
      }
    },
  }
</script>
