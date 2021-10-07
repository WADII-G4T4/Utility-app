<template>
  <div class="container ">
    <card style="width: 70%;" class="mx-auto login">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <form action="">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-12">
              <label class="card-title label form-label">
                Name
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-6 col-12">
              <label class="card-title label form-label">
                Name
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <label class="card-title label form-label">
            Email
          </label>
          <input type="text" class="form-control" />
          <label class="card-title label form-label">
            Password
          </label>
          <input type="text" class="form-control" />
        </form>

        <a href="#" class="btn btn-primary mb-3">Register</a>
        <div class="card-text">
          <u><router-link to="/">Already have an account? Login here</router-link></u>
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
