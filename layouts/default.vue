<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      v-if="$route.path != '/'"
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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      v-if="$route.path != '/'"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-icon>mdi mdi-map-marker</v-icon><h5>Jawa timur, Surabaya</h5>
      <v-spacer />
      <v-avatar
        color="warning"
        size="36"
      >OG</v-avatar>
    </v-app-bar>
    <v-main :style="(this.$store.state.global.path == '/') ? 'background-color : white' : 'background-color : lightgrey'">
        <Nuxt />
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixedtem
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-i-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-bottom-navigation
    :value="value"
    color="warning"
    grow
    v-if="$route.path != '/'"
    >
      <v-btn class="menu">     
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      :absolute="!fixed"
      app
      v-if="$route.path == '/'"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
 
  data () {
    return {
      background : (this.$store.state.global.path == '/') ? 'background-color : white' : 'background-color : lightgrey'  ,
      value: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      path : this.$store.state.global.path ,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
