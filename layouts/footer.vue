<template>
  <v-footer
    class="d-print-none"
    :absolute="!fixed"
    app
  >
    <v-switch
      class="mt-0"
      v-model="print"
      label="print"
      value="print"
      hide-details
    ></v-switch>
  </v-footer>
</template>

<script>
  export default {
    props: ['fixed'],
    data() {
      return {
        print: false
      }
    },
    watch: {
      print(newValue) {
        this.$store.commit('options/setPrint', newValue)
      }
    }
  }
</script>