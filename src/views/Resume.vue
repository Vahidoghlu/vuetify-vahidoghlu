<template>
  <v-layout row justify-center  wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2022 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Freelance Frontend <br> Developer</strong>
                <div class="caption mb-2">Remote</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAY 2022 -</div>
                <div class="caption font-weight-bold green--text">JUN 2022</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Transport Manager</strong>
                <div class="caption mb-2">Transport Manager (F1)</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">AUG 2020 -</div>
                <div class="caption font-weight-bold green--text">JAN 2022</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Schoolchild’s friend</strong>
                <div class="caption mb-2">Ministry of Science <br> and Education <br> Republic of Azerbaijan</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAR 2019 -</div>
                <div class="caption font-weight-bold green--text">JUL 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Office Manager</strong>
                <div class="caption mb-2">UpToDate In Medicine</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEP 2015 -</div>
                <div class="caption font-weight-bold green--text">JUL 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Azerbaijan State <br> University of <br> Culture and Fine Arts</strong>
                <div class="caption mb-2">Sociology</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEP 2004 -</div>
                <div class="caption font-weight-bold green--text">MAY 2015</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>№ 189-190</strong>
                <div class="caption mb-2">High School</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 x12  class="mt-5"> <h2 class="mb-4 pl-4 pt-2">Skills</h2></v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <strong>Vue JS, Vuex</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>HTML</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>CSS, SCSS</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Bootstrap</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Photoshop</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <strong>GIT</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>jQuery</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Responsive Design</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Office knowledge</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://www.linkedin.com/in/vahidoghlu/"
          target="_blank"
          color="green"
          dark
          large
        >
          Resume
          <v-icon right dark>fas fa-file</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Abbas Məmiyev",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Abbas Məmiyev" },
      { property: "og:site_name", content: "Abbas Məmiyev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://i.imgur.com/UbW0Z4z.png" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      buffer8: 0,
      buffer9: 0,
      buffer10: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 60;
        this.buffer2 = 100;
        this.buffer3 = 100;
        this.buffer4 = 100;
        this.buffer5 = 65;
        this.buffer6 = 70;
        this.buffer7 = 100;
        this.buffer8 = 80;
        this.buffer9 = 70;
        this.buffer10 = 80;
      }, 800);
    }
  }
};
</script>
<style >
</style>

