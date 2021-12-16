<template>
  <v-row no-gutters>
    <v-col class="main-tune" :cols="colSize">
      <div :id="`tune_${0}`" class="tune theme">
      </div>
    </v-col>

    <v-col :cols="colSize" class="pl-3">
      <div v-for="(abcTune, index) in abcTunes.slice(1)" :key="abcTune" :id="`tune_${index + 1}`" class="tune mb-3">
      </div>

      <v-textarea
        class="d-print-none free-textarea"
        v-model="free"
      ></v-textarea>

      <div id="tune_free" class="tune" v-if="free.length > 0">
        {{ free }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tune",
  data() {
    return {
      abcTunes: this.$initTune(...this.tuneProfile).toAbc(),
      free: ""
    }
  },
  mounted: function () {
    this.renderAbc()
    this.initFree()
  },
  props: [
    'tuneProfile'
  ],
  watch: {
    print() {
      this.renderAbc()
      this.renderAbcFree()
    },
    free(old, newVal) {
      this.renderAbcFree()
      this.saveFree()
    }
  },
  methods: {
    renderAbc() {
      let index = 0

      for (const abcTune of this.abcTunes) {
        this.$abcjs.renderAbc(`tune_${index}`, abcTune, this.abcOptions)
        index += 1
      }
    },
    renderAbcFree() {
      this.$abcjs.renderAbc("tune_free", this.free, this.abcOptions)
    },
    initFree() {
      if (process.client) {
        this.free = localStorage.getItem(this.localstorageFreeKey) || ""
        setTimeout(() => this.renderAbcFree(), 0)
      }
    },
    saveFree() {
      if (process.client) {
        localStorage.setItem(this.localstorageFreeKey, this.free)
      }
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
        return { }
      } else {
        return {
          responsive: 'resize'
        }
      }
    },
    colSize() {
      return (this.print ? '' : 6)
    }
  }
}
</script>

<style>
  .tune {
    background-color: white;
  }

  .free-textarea {
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    .theme {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0px;
    }
  }

  @media print {
    .main-tune {
      min-height: 29.5cm;
    }

    .tune {
      width: 21cm;
    }

    .theme {
      position: initial; /* Safari */
      position: initial;
    }
  }
</style>