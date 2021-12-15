<template>
  <div>
    <div v-for="(abcTune, index) in abcTunes" :key="abcTune">
      <div :id="`tune_${index}`" class="tune mb-3">
      </div>
    </div>
  </div>
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