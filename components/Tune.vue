<template>
  <v-row :key="print" class="pa-3">
    <v-col :cols="colSize">
      {{ $route.path }}
      <Sheet :abcTune="abcTunes[0]" :abcOptions="abcOptions" :style="print ? { maxWidth: '21cm' } : {}" />
    </v-col>

    <v-col :cols="colSize">
      <Sheet v-for="(abcTune, index) in abcTunes.slice(1)" :key="abcTune" 
        :abcTune="abcTune" 
        :abcOptions="abcOptions"
        class="mb-3"
        :style="print ? { maxWidth: '21cm' } : {}"
      />

      <v-textarea
        class="d-print-none free-textarea"
        v-model="abcFree"
      ></v-textarea>

      <Sheet v-if="abcFree.length > 0" 
        :key="abcFree"
        :abcTune="abcFree" 
        class="tune" 
        :style="print ? { maxWidth: '21cm' } : {}"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tune",
  data() {
    return {
      abcTunes: this.$initTune(...this.tuneProfile).toAbc(),
      abcFree: ""
    }
  },
  mounted: function () {
    this.abcFree = this.$route.query.abc ? atob(this.$route.query.abc) : localStorage.getItem(this.localstorageFreeKey) || ""
  },
  props: [
    'tuneProfile'
  ],
  watch: {
    abcFree(newVal) {
      this.$router.push({ query: { abc: btoa(newVal) } })
      localStorage.setItem(this.localstorageFreeKey, newVal)
    }
  },
  computed: {
    localstorageFreeKey() {
      return `${this.$route.path}_tune_free`
    },
    print() {
      return this.$store.getters["options/getPrint"]
    },
    abcOptions() {
      if (this.print) {
        return {
          add_classes: true
        }
      } else {
        return {
          responsive: 'resize'
        }
      }
    },
    colSize() {
      return (this.print ? 12 : 6)
    }
  }
}
</script>

<style>
  .free-textarea {
    max-width: 21cm;
  }
</style>