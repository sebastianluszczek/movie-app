<template>
  <v-container>
    <v-card v-if="singleMovie">
      <v-layout row wrap>
        <v-flex xs12 md5>
          <v-img :src="singleMovie.Poster"></v-img>
        </v-flex>
        <v-flex xs12 md7>
          <v-card-title primary-title>
            <div>
              <h3 class="display-3 mb-1">{{singleMovie.Title}}</h3>
              <div>{{ singleMovie.Plot }}</div>
              <br>
              <div>Actors: {{ singleMovie.Actors }}</div>
              <div>Director: {{ singleMovie.Director }}</div>
              <div>Awards: {{ singleMovie.Awards }}</div>
              <div>Genre: {{ singleMovie.Genre }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="green" :href="singleMovie.Website">Website</v-btn>
            <v-btn flat color="green" to="/">Back</v-btn>
            <RatingsPopup :ratings="singleMovie.Ratings" v-if="singleMovie"/>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";

import RatingsPopup from "@/components/RatingsPopup";

export default {
  props: ["id"],
  data() {
    return {
      singleMovie: null
    };
  },
  components: {
    RatingsPopup
  },
  async created() {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=8df2bab&i=${
          this.id
        }&Content-Type=application/json`
      );
      this.singleMovie = response.data;
      console.log(this.singleMovie);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
