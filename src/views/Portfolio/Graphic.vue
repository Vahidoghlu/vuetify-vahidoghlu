<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in images"
        :key="image.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg3 xl3 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                contain
                :src="image.poster"
                height="230"
                :alt="image.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{image.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Graphic Portfolio ",
    titleTemplate: "%s ← Abbas Məmiyev",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Abbas Məmiyev's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Abbas Məmiyeve" },
      { property: "og:site_name", content: "Abbas Məmiyev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vahidoghlu.com" },
      {
        property: "og:image",
        content: "https://i.imgur.com/UbW0Z4z.png"
      },
      {
        property: "og:description",
        content:
          "Abbas Məmiyev's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      images: [
        {
          dialog: false,
          title: "Gənclər və İdman Nazirliyi Logo (Demo)",
          poster: "https://i.imgur.com/nFEwNxd.jpg"
        },
        {
          dialog: false,
          title: "Gənclər və İdman Nazirliyi Logo (Demo)",
          poster: "https://i.imgur.com/bBMw8Fc.jpg"
        },
        {
          dialog: false,
          title: "Netflix Azerbaijan",
          poster: "https://i.imgur.com/OzXq3n7.png"
        },
        {
          dialog: false,
          title: "Jadeite Bag",
          poster: "https://i.imgur.com/4dcG986.jpg"
        },
        {
          dialog: false,
          title: "AH logo",
          poster: "https://i.imgur.com/OKgY17Q.jpg"
        },
        {
          dialog: false,
          title: "Gamer logo",
          poster: "https://i.imgur.com/p3e2eAA.jpg"
        },
        {
          dialog: false,
          title: "Invitation card",
          poster: "https://i.imgur.com/zkALta7.png"
        },
        {
          dialog: false,
          title: "VilaShirts T-Shirts",
          poster: "https://i.imgur.com/ULuRuFB.jpg"
        },
        {
          dialog: false,
          title: "BAB Coin",
          poster: "https://i.imgur.com/YU52AVB.jpg"
        }
      ]
    };
  }
};
</script>

<style  scoped>
</style>
