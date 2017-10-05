<template>
  <v-app dark>
    <v-navigation-drawer permanent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :href="item.to" value="true">
          <v-list-tile-action>
            <v-icon class="white--text" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>

    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import router from './router/index.js'


export default {
  data:() => ({
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { 
          icon: 'home', 
          title: 'Home', 
          to: '/#/home', 
          router: true 
        }
        //Add more options to the navigation drawer here
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue Boilerplate',
      errors: []
    }),

    //Any methods you need for the base App go here
    methods: {

    },

    //Any hook methods for the Vue application go here i.e. beforeCreate() {}

  }

</script>


