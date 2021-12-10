<template>
  <v-row justify="center" align="center">
    <v-col>
      <Tune :tuneProfile="tuneProfile" v-if="tuneProfile" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "tune",
  data() {
    return {
      tuneProfile: null
    }
  },
  async fetch() {
    this.tuneProfile = (await this.$content('tunes').where({ 
      title: this.$route.params.title 
    }).fetch())
  }
}
</script>

<style>
  #paper {
    background-color: white;
    width: 21cm;
  }
</style>