<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mt-2">
          <span>GetIn</span>
          <span class="green--text">Touch</span>
        </h2>
        <div class="py-4 subheading font-weight-bold">
          <v-icon class="mr-3 ml-2" large color="green" left>fas fa-map-marker-alt </v-icon>
          <span>Baku,&nbsp;</span>
          <span class="green--text">Azerbaijan</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-envelope</v-icon>
          <span>mr.vahidoghlu@</span>
          <span class="green--text">gmail.com</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-phone</v-icon>
          <span>+994&nbsp;</span>
          <span class="green--text">55 960 11 55</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-check</v-icon>
          <span>Freelance </span>
          <span class="green--text">Available</span>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mb-4">
          <span>Contact </span>
          <span class="green--text">Form</span>
        </h2>

        <form @submit.prevent="handleSubmit">
          <v-text-field
            name="name"
            color="green"
            background-color="transparent"
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            type="email"
            color="green"
            background-color="transparent"
            name="email"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            color="green"
            background-color="transparent"
            :counter="200"
            :error-messages="bodyErrors"
            v-model="body"
            label="Textarea"
            name="body"
            @blur="$v.body.$touch()"
          ></v-textarea>
          <v-btn
            type="submit"
            color="green"
            class="white--text"
            :disabled=" (body.length<=20)"
          >SEND MESSAGE</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {projectFirestore} from "../firebase/config";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s ??? Abbas M??miyev",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Abbas M??miyev's Contact Baku Azerbaijan Freelance Get in Touch ContactMe"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Abbas M??miyev" },
      { property: "og:site_name", content: "Abbas M??miyev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vahidoghlu.com" },
      {
        property: "og:image",
        content: "https://i.imgur.com/UbW0Z4z.png"
      },
      {
        property: "og:description",
        content:
          "Abbas M??miyev's Contact Baku Azerbaijan Freelance Get in Touch ContactMe"
      }
    ]
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  data() {
    return {
      name: "",
      email: "",
      body: ""
    };
  },
  methods: {
    handleSubmit(){
      let userMessage = {
        name: this.name,
        email: this.email,
        body: this.body
      };

      projectFirestore.collection('userMessage').add(userMessage)

      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("Text is required");
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
