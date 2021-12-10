<template>
  <div>
    <div id="tune">
    </div>

    {{ this.tune.toAbc() }}
  </div>
</template>

<script>
export default {
  name: "Tune",
  mounted: function () {
    this.$abcjs.renderAbc("tune", this.tune.toAbc(), {})
  },
  props: [
    'tuneProfile'
  ],
  data() {
    return {
      tune: this.$initTune(...this.tuneProfile)
    }
  }
}
</script>

<style>
  #tune {
    background-color: white;
    width: 21cm;
  }
</style>