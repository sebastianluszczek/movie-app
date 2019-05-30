<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-center">
        <v-dialog v-model="dialog" width="500">
          <v-btn slot="activator" color="green" flat dark>View Ratings</v-btn>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Ratings</v-card-title>
            <v-card-text>
              <table style="width:100%" border="1">
                <tr>
                  <th>Source</th>
                  <th>Ratings</th>
                </tr>
                <tr v-for="(rating,index) in this.ratings" :key="index">
                  <td align="center">{{ratings[index].Source}}</td>
                  <td align="center">{{ratings[index].Value}}</td>
                </tr>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["ratings"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
</style>
