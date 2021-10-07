<template>
  <div class="container ">
    <card style="width: 50%;" class="mx-auto login">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <form action="">
          <label class="card-title label form-label">
            Email
          </label>
          <input type="text" class="form-control">
          <label class="card-title label form-label">
            Password
          </label>
          <input type="text" class="form-control">
        </form>

        <a href="#" class="btn btn-primary mb-3">Login</a>
        <div class="card-text">
            <u><router-link to="/register">Haven't made an account? Register here</router-link></u>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "../components/Cards/Card.vue";
export default {
  components: {
    Card
  },
  methods:{
    register(){
      $route
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
