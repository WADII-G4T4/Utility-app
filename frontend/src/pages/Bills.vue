<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>

      <button>Pay Outstanding Bills</button>
    </div>
</template>

<script>
import { BaseTable } from "@/components";
const tableColumns = ["Id", "Amount", "Month", "Status"];
const tableData = [
    {
    id: 4,
    amount: "$103",
    month: "September",
    status: "NOT PAID",
    
  },
  {
    id: 3,
    amount: "$154",
    month: "August",
    status: "PAID",
  },
  {
    id: 2,
    amount: "$107",
    month: "July",
    status: "PAID",
  },
  {
    id: 1,
    amount: "$109",
    month: "June",
    status: "PAID",
  }
  ];


    export default {
        components: {
            BaseTable
        }, 
    data() {
    return {
      table1: {
        title: "Bills",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }, 
  mounted(){
    this.tableData.status[0]
  }
    }; 


    
</script>

<style lang="scss" scoped>

button {
  border-radius:10px;
  text-align:center;
  margin:auto;
}


</style>