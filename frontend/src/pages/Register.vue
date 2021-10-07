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
              <input type="text" class="form-control" v-model="firstName"/>
            </div>
            <div class="col-lg-6 col-12">
              <label class="card-title label form-label">
                Last Name
              </label>
              <input type="text" class="form-control" v-model="lastName"/>
            </div>
          </div>

          <label class="card-title label form-label">
            Email
          </label>
          <input type="text" class="form-control" v-model="email"/>
          <label class="card-title label form-label">
            Password
          </label>
          <input type="password" class="form-control" v-model="password"/>
          <label class="card-title label form-label">
            Re-confirm Password
          </label>
          <input type="password" class="form-control" v-model="re_password"/>
        </form>

        <a href="#" class="btn btn-primary mb-3" @click="register()">Register</a>
        <div class="card-text">
          <u><router-link to="/">Already have an account? Login here</router-link></u>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "../components/Cards/Card.vue";
import API from '../api/API'
export default {
  components: {
    Card
  },
  data(){
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      re_password: null,
    }
  },
  methods:{
    async register(){
      const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            re_password: this.re_password
        }
        console.log(data)
      try {
        
        const res = await API.signup(data)
        console.log(res.data)
        const { token } = res.data;
            
        window.localStorage.setItem("token", token);
        this.$router.push("/home/dashboard")
      } catch (error) {
        console.log(error)
      }
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
