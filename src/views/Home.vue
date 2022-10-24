<template class="mx-0">
  <v-layout  column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Abbas Məmiyev"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="green--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I’m Abbas Məmiyev. I'm a front-end developer passionate about
                <span
                  class="green--text font-weight-bold"
                >VUE</span>, fighting for simplicity over complexity and constantly learning. I am very interested in IT
                and everything in its orbit. I recently began to be fascinated by web programming, e.g. building
                websites. I gained experience working in this area. And I like it. <br>
                For this reason, I am looking for a company willing to offer me a placement among their developers. In
                return, I would offer my total commitment, and be a pleasant and friendly addition to your team. I am
                therefore currently looking for a job as a front-end developer.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {VueTyper} from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Abbas Məmiyev",
    meta: [
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {name: "description", content: "Abbas Məmiyev's Portfolio"},
      {charset: "utf-8"},
      {property: "og:title", content: "Abbas Məmiyev"},
      {property: "og:site_name", content: "Abbas Məmiyev"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: "https://vahidoghlu.com"},
      {
        property: "og:image",
        content: "https://i.imgur.com/UbW0Z4z.png"
      },
      {property: "og:description", content: "Abbas Məmiyev's Portfolio"}
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        {href: "https://www.linkedin.com/in/vahidoghlu/", icon: "fab fa-linkedin-in"},
        {href: "https://github.com/Vahidoghlu", icon: "fab fa-github"},
        {href: "https://www.facebook.com/abbas.vahidoghlu", icon: "fab fa-facebook-f"},
        {href: "https://www.instagram.com/mr.vahidoghlu/", icon: "fab fa-instagram"},
        {href: "https://api.whatsapp.com/send?phone=+994559601155&text=Salam, sizinlə əlaqə saxlamaq istərdim", icon: "fab fa-whatsapp"},
        {href: "https://t.me/mrvahidoghlu", icon: "fab fa-telegram"},
      ],
      text1: ["Front-End Developer", "Web Developer", "Web Designer"],
      leftImage: "https://i.imgur.com/E8iNu0q.png",
      rightImage: "https://i.imgur.com/9FjBUFu.png",
      leftImage2: "https://i.imgur.com/rbvRyQK.png",
      rightImage2: "https://i.imgur.com/UbW0Z4z.png",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.vue-typer .custom.char.typed {
  color: green;
}

.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}

.vue-typer .custom.caret.typing {
  background-color: green;
}

.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>

