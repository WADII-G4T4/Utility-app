<template>
  <div class="container ">
    <card style="width: 70%;" class="mx-auto login">
      <div class="card-body">
        <h2 class="card-title">Register</h2>
        <form action="">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-12">
              <label class="card-title label form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                required
              />
              <label class="card-title label text-danger form-label" v-if="!firstName">
                Please fill in this field
              </label>
            </div>
            <div class="col-lg-6 col-12">
              <label class="card-title label form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                required
              />
              <label class="card-title label text-danger form-label" v-if="!lastName">
                Please fill in this field
              </label>
            </div>
          </div>
          <label class="card-title label form-label">
            Address
          </label>
          <input type="text" class="form-control" v-model="address" required />
          <label class="card-title label text-danger form-label" v-if="!address">
            Please fill in this field </label
          ><br />
          <label class="card-title label form-label">
            Postal Code
          </label>
          <input type="text" class="form-control" v-model="zip" required />
          <label class="card-title label text-danger form-label" v-if="!zip">
            Please fill in this field </label
          ><br />
          <label class="card-title label form-label">
            Occupation
          </label>
          <input
            type="text"
            class="form-control"
            v-model="occupation"
            required
          />
          <label class="card-title label text-danger form-label" v-if="!occupation">
            Please fill in this field </label
          ><br />
          <label class="card-title label form-label">
            Email
          </label>
          <input type="text" class="form-control" v-model="email" required />
          <label class="card-title label text-danger form-label" v-if="!email">
            Please fill in this field </label
          ><br />
          <label class="card-title label form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            required
          />
          <label class="card-title label text-danger form-label" v-if="!password">
            Please fill in this field </label
          ><br />
          <label class="card-title label form-label">
            Re-confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            v-model="re_password"
            required
          />
          <label class="card-title label text-danger form-label" v-if="!re_password">
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
        <a href="#" class="btn btn-primary mb-3" @click="register()"
          >Register</a
        >
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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      re_password: null,
      address: null,
      zip: null,
      occupation: null,
      recaptcha: null,
      error: null
    };
  },
  methods: {
    async register() {
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
          console.log(res.data);
          const { token } = res.data;

          window.localStorage.setItem("token", token);
          this.$router.push("/home/dashboard");
        } catch (error) {
          this.error = error.response.data.message
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
