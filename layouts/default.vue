<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      class="d-print-none"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      class="d-print-none"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main class="main">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer :fixed="fixed" />
  </v-app>
</template>

<script>
import Footer from "./footer.vue"

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Projet Musical',
      tunes: []
    }
  },
  components: {
    Footer
  },
  computed: {
    items() {
      const items = []

      items.push({
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      })
     
      this.tunes.forEach((tune) => {
        items.push({
          icon: 'mdi-music-note',
          title: tune.title,
          to: '/tunes/' + tune.uid
        })
      })

      return items
    }
  },
  async fetch() {
    this.tunes = await this.$content('tunes').only(['title', 'uid']).sortBy('title').fetch()
  }
}
</script>

<style>
  @media print {
    .main {
      padding-top: 0px !important;
      padding-left: 0px !important;
      padding-bottom: 0px !important;
    }
  }
</style>