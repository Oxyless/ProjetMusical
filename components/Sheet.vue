<template>
  <div :id="tuneId" class="sheet">
  </div>
</template>

<script>
export default {
  props: [ 'abcTune', 'abcOptions' ],
  data() {
    return {
      tuneId: `${Math.random()}`.replace(".", "")
    }
  },
  mounted: function () {
    this.$abcjs.renderAbc(this.tuneId, this.abcTune, this.abcOptions)
  }
}
</script>

<style>
  .sheet {
    background-color: white;
    max-width: 21cm;
  }

  @media print {
    .sheet {
      width: 21cm;
    }
  }
</style>