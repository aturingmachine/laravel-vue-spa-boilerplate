<template>

<!-- This is the container for the card that holds the content on this page -->
  <v-container fluid class="pa-0">

    <v-toolbar>
      <v-toolbar-title> Welcome To Your Single Page Application</v-toolbar-title>
    </v-toolbar>

      <v-card tile>
        <v-card-title>

          Use the Navigation Drawer to the left to access the ddifferent pages of your application.

          You can use this page as a starting point for your other pages.

        </v-card-title>

      </v-card>

  </v-container>

</template>

<script>
export default {
  data: () => ({
    //any data you need is bound here
  }),

  methods: {
    //any methods this page may need
  }

}
</script>

<style>
  /* Any specific styles you need for this page go here */
</style>