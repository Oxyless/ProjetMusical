<template>
  <v-row no-gutters>
    <v-col style="min-height: 28cm">
      <div :id="`tune_${0}`" class="tune mb-3">
      </div>
    </v-col>

    <v-col>
      <div v-for="(abcTune, index) in abcTunes.slice(0)" :key="abcTune" :id="`tune_${index}`" class="tune">
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tune",
  mounted: function () {
    let index = 0

    for (const abcTune of this.abcTunes) {
      this.$abcjs.renderAbc(`tune_${index}`, abcTune, {})
      index += 1
    }
  },
  props: [
    'tuneProfile'
  ],
  data() {
    return {
      abcTunes: this.$initTune(...this.tuneProfile).toAbc()
    }
  }
}
</script>

<style>
  .tune {
    background-color: white;
    width: 21cm;
  }
</style>