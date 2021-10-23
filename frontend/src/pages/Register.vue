<template>
  <div class="container ">
    <card style="width: 70%;" class="mx-auto login">
      <div class="card-body">
        <h2 class="card-title">Register</h2>
        <form action="">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-12">
              <base-input
                label="First Name"
                placeholder="First Name"
                v-model="firstName"
              >
              </base-input>
              <label
                class="card-title label text-danger form-label"
                v-if="!firstName"
              >
                Please fill in this field
              </label>
            </div>
            <div class="col-lg-6 col-12">
              <base-input
                label="Last Name"
                placeholder="Last Name"
                v-model="lastName"
              >
              </base-input>
              <label
                class="card-title label text-danger form-label"
                v-if="!lastName"
              >
                Please fill in this field
              </label>
            </div>
          </div>
          <base-input label="Address" placeholder="Address" v-model="address">
          </base-input>
          <label
            class="card-title label text-danger form-label"
            v-if="!address"
          >
            Please fill in this field </label
          ><br />
          <base-input
            label="Postal Code"
            placeholder="Postal Code"
            v-model="zip"
          >
          </base-input>
          <label class="card-title label text-danger form-label" v-if="!zip">
            Please fill in this field </label
          ><br />
          <base-input
            label="Occupation"
            placeholder="Occupation"
            v-model="occupation"
          >
          </base-input>
          <label
            class="card-title label text-danger form-label"
            v-if="!occupation"
          >
            Please fill in this field </label
          ><br />
          <base-input label="Email" placeholder="Email" v-model="email">
          </base-input>
          <label class="card-title label text-danger form-label" v-if="!email">
            Please fill in this field </label
          ><br />
          <base-input
            label="Password"
            placeholder="Password"
            v-model="password"
            type="password"
          >
          </base-input>
          <label
            class="card-title label text-danger form-label"
            v-if="!password"
          >
            Please fill in this field </label
          ><br />
          <base-input
            label="Re-confirm Password"
            placeholder="Re-confirm Password"
            v-model="re_password"
            type="password"
          >
          </base-input>
          <label
            class="card-title label text-danger form-label"
            v-if="!re_password"
          >
            Please fill in this field </label
          ><br />
        </form>
        <vue-recaptcha :sitekey="site" @verify="verify"></vue-recaptcha>
        <label
          class="card-title label text-danger form-label"
          v-if="!recaptcha"
        >
          Not yet verified </label
        ><br />
        <div @click="register">
        <vue-loading-button
          :loading="isLoading"
          
          class="btn btn-primary "
          
          >Register</vue-loading-button
        >
        </div>
        <div class="card-text">
          <p v-if="error" class="text-danger label">
            {{ error }}
          </p>
          <u
            ><router-link to="/"
              >Already have an account? Login here</router-link
            ></u
          >
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "../components/Cards/Card.vue";
import API from "../api/API";
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    VueRecaptcha,
    Card
  },
  data() {
    return {
      isLoading: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      re_password: null,
      address: null,
      zip: null,
      occupation: null,
      recaptcha: null,
      error: null,
      site: "6LeXbNEcAAAAADXZ4hJWouw34d7_KNQHrFddaGE7"
    };
  },
  methods: {
    async register() {
      this.isLoading = true;
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        re_password: this.re_password,
        address: this.address,
        zip: this.zip,
        occupation: this.occupation
      };
      if (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.password &&
        this.re_password &&
        this.address &&
        this.occupation &&
        this.recaptcha
      ) {
        try {
          const res = await API.signup(data);
          
          const { token } = res.data;

          window.localStorage.setItem("token", token);
          this.$router.push("/home/dashboard");
        } catch (error) {
          this.error = error.response.data.message;
        }
      } else {
        this.error = "You have not filled in all of the required details yet";
      }
    },
    verify(response) {
      this.recaptcha = response;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 5cm;
}
.label {
  font-size: 15px;
}
</style>
