<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <p class="headline" @click="$router.push('/')">
          <span class="grey--text">Movie</span>API
        </p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row wrap>
        <v-flex xs9>
          <v-text-field label="Search" v-model="searchString"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-btn @click="searchMovie">Search</v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  }
};
</script>
