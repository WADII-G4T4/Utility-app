<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" class="relative">
        <div class="table">
          <!-- <loading :loaded="isLoading"/> -->
          <div v-if="!isLoading" class="loader">
            <vue-simple-spinner message="Please wait while we retrieve your bills"></vue-simple-spinner>
          </div>
          <base-table
            :data="table1.data"
            :columns="table1.columns"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>
  </div>
  <!-- <button class="btn btn-primary" @click="stripe">TEST</button> -->
</template>

<script>
import { BaseTable } from "@/components";
import API from "../api/API";

const tableColumns = ["Name", "Amount", "Status"];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Bills",
        columns: [...tableColumns],
        data: []
      },
      isLoading: false,
      
    };
  },
  methods: {
    
  },
  async mounted() {
    const token = window.localStorage.getItem("token");
    try {
      const result = await API.stripe(token);
      this.isLoading = true;

      this.table1.data = result.data.extracted;
    } catch (error) {}
  }
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 10px;
  text-align: center;
  margin: auto;
}
.relative{
  position: relative;
}
.loader{
  position: absolute;
  top: 150%;
  left: 37%;
}
</style>
