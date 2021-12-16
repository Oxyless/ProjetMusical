<template>
  <v-row justify="center">
    <v-col>
      <client-only>
        <Tune :tuneProfile="tuneProfile" v-if="tuneProfile" />
      </client-only>
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
      uid: this.$route.params.uid 
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