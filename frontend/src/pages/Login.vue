<template>
  <div class="container ">
    <card style="width: 50%;" class="mx-auto login">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <form action="">
          <label class="card-title label form-label">
            Email
          </label>
          <input type="text" class="form-control" v-model="email">
          <label class="card-title label form-label">
            Password
          </label>
          <input type="password" class="form-control" v-model="password">
        </form>

        <a href="#" class="btn btn-primary mb-3" @click="login">Login</a>
        <div class="card-text">
          <p v-if="error">You have entered an incorrect email/password. Please try again.</p>
            <u><router-link to="/register">Haven't made an account? Register here</router-link></u>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "../components/Cards/Card.vue";
import API from "../api/API"
export default {
  components: {
    Card
  },
  data(){
    return {
      email: null,
      password: null,
      error: false
    }
  },
  methods:{
    async login(){
      const data = {
            email: this.email,
            password: this.password,
        }
      try {
        const res = await API.signin(data)
        const { token } = res.data;
            
        window.localStorage.setItem("token", token);
        this.$router.push("/home/dashboard")
      } catch (error) {
        this.error = true;
      }
    }
  }  
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 5cm;
}
.label{
    font-size: 15px;
}
</style>
